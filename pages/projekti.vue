<template>
  <div class="container">
    <div class="header__wrapper">
      <h1 class="header-h1">
        Projekti
      </h1>
      <h2 class="header-h2 mb-0 pb-0">
        Predstavitev osebnih projektov
      </h2>
    </div>

    <div class="grid">
      <NuxtLink v-for="project of projects" :key="project.title" :to="linkToShowCase(project._path)" class="element">
        <div class="element__overlay">
          <h3 class="header-h2">
            {{ project.title }}
          </h3>
          <div style="width: 100%; border-bottom: 1px solid black; margin: 1rem 0"></div>
          <div>
            {{ project.abstract }}
          </div>
          <hr/>
        </div>
        <img :src="project.coverImage"/>
      </NuxtLink>
    </div>


  </div>
</template>

<script lang="ts" setup>
import type {ShowcaseModel} from '~/models'


const projects = ref<ShowcaseModel[] | null>(null);

useAsyncData('fetchShowcase', () =>
    queryContent(`showcases`).find()
).then(({data}) => projects.value = data.value)

const linkToShowCase = (path: string) =>
    path.replace('showcases', 'showcase')

</script>

<style lang="scss" scoped>

@keyframes appear {
  from {
    opacity: 0;
    scale: 0.5;
  }
  to {
    opacity: 1;
    scale: 1;
  }
}

.grid {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  column-gap: 2em;
  row-gap: 2em;

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (min-width: 1216px) {
    grid-template-columns: repeat(3, 1fr);
  }
}

.element {
  $border-radius: 8px;
  border-radius: $border-radius;
  min-height: 25em;
  background: white;
  transition: 0.5s;
  position: relative;

  animation: appear linear;
  animation-timeline: view();
  animation-range: entry 0% cover 20%;

  img {
    height: 100%;
    object-fit: cover;
  }

  &__overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(#f0f0f0, 0.75);
    border-radius: $border-radius;
    opacity: 0;
    transition: 0.5s;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;

    &:hover {
      opacity: 1;
      color: unset;
    }
  }

  &:hover {
    $box-shadow: 10px 10px 10px 2px rgba(0, 0, 0, 0.125);

    -webkit-box-shadow: $box-shadow;
    -moz-box-shadow: $box-shadow;
    box-shadow: $box-shadow,
    -10px -10px 10px 2px white;
  }

  @media screen and (min-width: 768px) {
    min-height: unset;
    aspect-ratio: 1;
  }

}

</style>