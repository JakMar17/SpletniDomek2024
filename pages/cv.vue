<template>
  <div class="container">
    <div
        class="header__wrapper is-flex is-justify-content-space-between is-align-items-center is-flex-wrap-wrap"
    >
      <h1 class="header-h1">Življenjepis</h1>
     <div>
       <NuxtLink
           v-if="cvFileUrl"
           :to="cvFileUrl"
           @click="onCvDownloadTrackEvent('sl')"
           class="button is-dark is-rounded"
           target="_blank"
       >
         <span>Prenesi CV</span>
         <span class="icon">
                    <i class="ri-file-paper-2-line"></i>
                </span>
       </NuxtLink>
       <NuxtLink
           v-if="cvFileEnUrl"
           :to="cvFileEnUrl"
           @click="onCvDownloadTrackEvent('en')"
           class="button is-outlined is-rounded"
           target="_blank"
       >
         <span>CV (English)</span>
         <span class="icon">
                    <i class="ri-file-paper-2-line"></i>
                </span>
       </NuxtLink>
     </div>
    </div>

    <h2 class="header-h2">Delovne izkušnje</h2>
    <div v-if="workExperiences.length !== 0">
      <CvSplitRowComponent
          v-for="w of workExperiences"
          :key="w.company"
          v-bind="w"
      />
    </div>

    <h2 class="header-h2">Izobrazba</h2>
    <div>
      <CvSplitRowComponent
          v-for="e of education"
          :key="e.position"
          v-bind="e"
      />
    </div>

    <h2 class="header-h2">Ostali poudarki</h2>
    <div>
      <CvSplitRowComponent
          v-for="o of otherHighlights"
          :key="o.position"
          v-bind="o"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import type {CvCardModel} from '~/models'

const { trackEvent } = usePlausible()
const router = useRouter()

const workExperiences = ref<CvCardModel[]>([])
const education = ref<CvCardModel[]>([])
const otherHighlights = ref<CvCardModel[]>([])
const cvFileUrl = ref<string | null>(null)
const cvFileEnUrl = ref<string | null>(null)

useAsyncData('fetchWorkExperiences', () =>
    queryContent('cv/work-experiences').findOne()
).then(({data}) => (workExperiences.value = data.value?.entries))

useAsyncData('fetchEducation', () =>
    queryContent('cv/education').findOne()
).then(({data}) => (education.value = data.value?.entries))

useAsyncData('fetchOtherHighlights', () =>
    queryContent('cv/other-highlights').findOne()
).then(({data}) => (otherHighlights.value = data.value?.entries))

useAsyncData('fetchCvFile', () => queryContent('cv/cv-file').findOne()).then(
    ({data}) => {
      cvFileUrl.value = data.value?.fileSl.replace('/public', '')
      cvFileEnUrl.value = data.value?.fileEn.replace('/public', '')
    });

useServerSeoMeta(
    createSeoObject({
      title: 'Moje izkušnje - Jakobov CV',
      image: '/images/me.jpg.webp',
      description: 'Nekaj o mojih dosedanjih izkušnjah in znanjih.',
    })
)

const onCvDownloadTrackEvent = (locale: string) =>
  trackEvent('cvDownload', {props: {locale}});
</script>

<style lang="scss" scoped></style>
