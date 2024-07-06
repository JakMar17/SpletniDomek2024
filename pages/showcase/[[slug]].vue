<template>
  <div class="container">
    <div class="header__wrapper">
      <h1 class="header-h1">
        {{ showcase?.title }}
      </h1>
      <div class="is-flex is-justify-content-space-between is-align-items-center">
        <h2 class="header-h2 mb-0 pb-0">
          {{ showcase?.subtitle }}
        </h2>
        <a v-if="showcase?.link" :href="showcase.link" target="_blank" class="button is-dark is-rounded">Spletna stran</a>
      </div>

      <div id="cover-img" v-if="showcase?.coverImage">
        <img :src="showcase?.coverImage"/>
      </div>

      <div class="is-flex is-justify-content-space-between is-flex-wrap-wrap">
        <div class="intro__highlights">

          <div v-for="h of showcase?.highlights" :key="h.highlightTitle" class="intro__highlight">
            <h3 class="header-h3 pb-0">{{ h.highlightTitle }}</h3>
            <div class="intro__highlight__content">
              <div v-for="d of h.highlightData" :key="d">{{ d }}</div>
            </div>
          </div>
        </div>

        <div class="content intro__content">
          <ContentRendererMarkdown :value="introParsed" class="markdown"/>
        </div>
      </div>
    </div>

    <div v-for="paragraph of paragraphsParsed" :key="paragraph.title" class="description">
      <div class="description__supertitle">{{ paragraph.superTitle }}</div>
      <h3 class="header-h2">{{ paragraph.title }}</h3>
      <div v-if="paragraph.content != null" class="content">
        <ContentRendererMarkdown :value="paragraph.content" class="markdown"/>
        <div>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup lang="ts">
import {parseMarkdown} from "~/utils/parseMarkdown";
import {ShowcaseDescriptionModel, ShowcaseModel} from "~/models";

const route = useRoute();

const showcase = ref<ShowcaseModel | null>(null);
const introParsed = ref<string | null>(null);
const paragraphsParsed = ref<ShowcaseDescriptionModel[]>([]);

useAsyncData('fetchShowcase', () => queryContent(`showcases/${route.params.slug}`).findOne()).then(({data}) => {
  showcase.value = data.value
  parseMarkdown(showcase.value?.highlightIntro).then((parsed: string) => introParsed.value = parsed);

  Promise.all(showcase.value?.descriptions.map(async (desc) => {
    try {
      const parsed = await parseMarkdown(desc.content);
      desc.content = parsed;
    } catch(e) {
      console.error(e)
    }
    return desc;
  })).then((res) => paragraphsParsed.value = res)

});
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