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

      <div v-if="showcase?.coverImage" style="max-height: 30em; width: 100%; margin: 2rem 0 3rem 0">
        <img style="height: 30em; width: 100%; object-fit: cover; object-position: center" :src="showcase?.coverImage"/>
      </div>

      <div class="is-flex is-justify-content-space-between is-flex-wrap-wrap">
        <div style="width: 30%;">

          <div v-for="h of showcase?.highlights" :key="h.highlightTitle" style="margin-bottom: 2rem">
            <h3 class="header-h3 pb-0">{{ h.highlightTitle }}</h3>
            <div style="font-family: 'Inter Tight', serif; font-weight: 600; padding-left: 1rem">
              <div v-for="d of h.highlightData" :key="d">{{ d }}</div>
            </div>
          </div>
        </div>

        <div style="width: 66%; align-self: stretch" class="content">
          <ContentRendererMarkdown :value="introParsed"/>
        </div>
      </div>
    </div>

    <div v-for="paragraph of paragraphsParsed" :key="paragraph.title" style="margin-bottom: 3rem">
      <div class="header-h3" style="font-size: 18px; padding-bottom: 0;">{{ paragraph.superTitle }}</div>
      <h3 class="header-h2">{{ paragraph.title }}</h3>
      <div v-if="paragraph.content != null" class="content">
        <ContentRendererMarkdown :value="paragraph.content"/>
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
    desc.content = await parseMarkdown(desc.content);
    return desc;
  })).then((res) => paragraphsParsed.value = res)

});


</script>