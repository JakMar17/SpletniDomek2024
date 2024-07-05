<template>
  <div class="wrapper">
    <div class="icon__box">
      <i :class="icon" class="icon"/>
    </div>
    <div class="description">
      <div class="description__title">{{ title }}</div>
      <div class="description__line"></div>
      <div>{{description}}</div>
    </div>
  </div>

</template>

<script setup lang="ts">

import {HighlightedToolModel} from "~/models";

const props = defineProps<HighlightedToolModel>();

</script>

<style lang="scss" scoped>

.wrapper {
  width: 45%;
  min-width: 20em;
  margin-bottom: 2rem;
  display: flex;
  gap: 2rem;
}

.icon {
  font-size: 2rem;

  &__box {
    height: 4rem;
    width: 4rem;
    background: #f0f0f0;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}

.description {
  flex-grow: 1;

  &__title {
    font-family: 'Inter Tight', serif;
    font-size: 18px;
    font-weight: 600;
    letter-spacing: 1px;
  }

  &__line {
    border-bottom: 1px solid black;
    margin: 0.25rem 0;
  }

}
</style>