<template>
    <div class="container">
        <div class="header__wrapper">
            <h1 class="header-h1">
                {{ showcase?.title }}
            </h1>
            <h2 class="header-h2 mb-0 pb-0">
                {{ showcase?.subtitle }}
            </h2>

            <div v-if="showcase?.coverImage" id="cover-img">
                <img
                    :src="showcase?.coverImage"
                    loading="lazy"
                    alt="Slika kontesta"
                />
            </div>

            <div
                class="is-flex is-justify-content-space-between is-flex-wrap-wrap scroll-animation__from-bottom"
            >
                <div class="intro__highlights">
                    <div
                        v-if="(showcase?.links?.length ?? 0) > 0"
                        class="intro__highlight"
                    >
                        <h3 class="header-h3 pb-0">Povezave</h3>
                        <div class="intro__highlight__content">
                            <div
                                v-for="link of showcase?.links"
                                :key="link.linkTitle"
                                class="link"
                            >
                                <a :href="link.linkUrl" target="_blank" @click="onExternalLinkClickTrackEvent('link', link.linkTitle)">{{
                                    link.linkTitle
                                }}</a>
                            </div>
                        </div>
                    </div>
                    <div
                        v-if="(attachments?.length ?? 0) > 0"
                        class="intro__highlight"
                    >
                        <h3 class="header-h3 pb-0">Priloge</h3>
                        <div class="intro__highlight__content">
                            <div
                                v-for="attachment of attachments"
                                :key="attachment.attachmentTitle"
                                class="link"
                            >
                                <NuxtLink
                                    :href="attachment.attachmentFile"
                                    target="_blank"
                                    @click="onExternalLinkClickTrackEvent('attachment', link.linkTitle)"
                                    >{{ attachment.attachmentTitle }}</NuxtLink
                                >
                            </div>
                        </div>
                    </div>
                    <div
                        v-for="h of showcase?.highlights"
                        :key="h.highlightTitle"
                        class="intro__highlight"
                    >
                        <h3 class="header-h3 pb-0">{{ h.highlightTitle }}</h3>
                        <div class="intro__highlight__content">
                            <div v-for="d of h.highlightData" :key="d">
                                {{ d }}
                            </div>
                        </div>
                    </div>
                </div>

                <div class="content intro__content">
                    <ContentRendererMarkdown
                        :value="introParsed"
                        class="markdown"
                    />
                </div>
            </div>
        </div>

        <div
            v-for="paragraph of paragraphsParsed"
            :key="paragraph.title"
            class="description scroll-animation__from-bottom"
        >
            <div class="description__supertitle">
                {{ paragraph.superTitle }}
            </div>
            <h3 class="header-h2">{{ paragraph.title }}</h3>
            <div v-if="paragraph.content != null" class="content">
                <ContentRendererMarkdown
                    :value="paragraph.content"
                    class="markdown"
                />
                <div />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { parseMarkdown } from '~/utils/parseMarkdown'
import type { ShowcaseDescriptionModel, ShowcaseModel } from '~/models'

const route = useRoute()
const {trackEvent} = usePlausible()

const showcase = ref<ShowcaseModel | null>(null)
const introParsed = ref<string | null>(null)
const paragraphsParsed = ref<ShowcaseDescriptionModel[]>([])
const attachments = ref<
    { attachmentTitle: string; attachmentFile: string }[] | null
>(null)

useAsyncData('fetchShowcase', () =>
    queryContent(`showcases/${route.params.slug}`).findOne()
).then(({ data }) => {
    showcase.value = data.value
    parseMarkdown(showcase.value?.highlightIntro).then(
        (parsed: string) => (introParsed.value = parsed)
    )

    attachments.value = data.value?.attachments?.map(
        ({ attachmentTitle, attachmentFile }) => ({
            attachmentTitle,
            attachmentFile: attachmentFile.replace('/public', ''),
        })
    )

    useServerSeoMeta(
        createSeoObject({
            title: showcase.value?.title,
            image: showcase.value?.coverImage,
            description: showcase.value?.highlightIntro,
        })
    )

    setTimeout(() => {
        Promise.all(
            showcase.value?.descriptions?.map(async (desc) => {
                try {
                    const parsed = await parseMarkdown(desc.content)
                    desc.content = parsed
                } catch (e) {
                    console.error(e)
                }
                return desc
            })
        ).then((res) => (paragraphsParsed.value = res))
    }, 100)
})

const onExternalLinkClickTrackEvent = (type: string, id: string) =>
    trackEvent(`Showcase - ${showcase.value?.title} - ${type} - ${id}`)
</script>

<style lang="scss" scoped>
#cover-img {
    max-height: 30em;
    width: 100%;
    margin: 2rem 0 3rem 0;

    img {
        height: 30em;
        width: 100%;
        object-fit: cover;
        object-position: center;
    }
}

.intro {
    &__highlights {
        width: 100%;

        @media screen and (min-width: 768px) {
            width: 30%;
        }
    }

    &__highlight {
        margin-bottom: 2rem;

        &__content {
            font-family: 'Inter Tight', serif;
            font-weight: 600;
            padding-left: 1rem;

            .link {
                margin-bottom: 0.25rem;
                text-decoration: 1px underline;

                a {
                    color: unset;
                }
            }
        }
    }

    &__content {
        @media screen and (min-width: 768px) {
            width: 66%;
            align-self: stretch;
        }
    }
}

.description {
    margin-bottom: 3rem;

    &__supertitle {
        font-weight: 200;
        font-size: 18px;
        padding-bottom: 0;
    }
}
</style>
