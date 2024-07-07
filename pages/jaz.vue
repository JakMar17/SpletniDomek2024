<template>
  <div class="container">
    <div class="header__wrapper">
      <h1 class="header-h1">Moja zgodba</h1>
    </div>

      <div class="about-me__wrapper">


        <div class="about-me__img-wrapper">
          <img class="about-me__img" src="../assets/images/me-2.jpg.webp" loading="lazy"/>
        </div>


        <div class="about-me__description">
          <h2 class="header-h2">Kdo sem?</h2>
          <p>Sem Jakob. Kraševec. Tehnolški navdušenec in vedno znova iskalec rešitev v lastnih problemih in problemih ljudi okrog mene.</p>
          <p>Že od malih nog sem rad raziskoval in se učil novih stvari. Zato me je pot hitro zanesla v tehnologijo in računalništvo.</p>
          <p>V zadnjem času se posvečam predvsem razvoju uporabniških izkušenj in vmesnikov na <b>spletnih straneh in aplikacijah</b>; hkrati pa ohranjam stik s tehnologijami in pristopi zalednih sistemov in podatkovnih baz.</p>
          <p>Največ izkušenj imam z ogrodjema <b>Angular</b> in <b>NuxJS</b> na frontendu, za razvoj mobilnih aplikacij se poslužujem ogrodja <b>Flutter</b>, zaledne sisteme pa v <b>SpringBoot</b> in podatkovni bazi <b>MariaDB</b> ali PostgreSQL.</p>
          <h3 class="header-h3 mt-5">Kontakt</h3>
          <div class="is-flex is-flex-wrap-wrap" style="gap: 3rem">
            <div>
              <div style="font-weight: 600; font-family: 'Inter Tight', serif; letter-spacing: 2px;">EMAIL</div>
              <div>jakob.marusic17@gmail.com</div>
            </div>
            <div>
              <div style="font-weight: 600; font-family: 'Inter Tight', serif; letter-spacing: 2px;">TELEFON</div>
              <div>+386 (0)31 708 115</div>
            </div>
          </div>
        </div>
      </div>

    <h2 class="header-h2" style="margin-top: 4rem; margin-bottom: 2rem">Najpogosteje uporabljena orodja</h2>

    <div class="is-flex is-justify-content-space-between is-flex-wrap-wrap">
      <CardTechnologyComponent v-for="h of highlightedTools" :key="h.icon" v-bind="h"/>
    </div>

  </div>

</template>
<script setup lang="ts">
import {HighlightedToolModel} from "~/models";

const highlightedTools = ref<HighlightedToolModel[] | null>(null);

useAsyncData('fetchHighlightedTools', () => queryContent('cv/highlighted-tools').findOne()).then(({data}) => highlightedTools.value = data.value.entries);

</script>

<style scoped lang="scss">

.about-me {
  &__wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  &__description {
    width: 100%;
    background: #f0f0f0;
    border-radius: 8px;
    align-self: stretch;
    padding: 1rem;

    p:not(:last-child) {
      margin-bottom: 1rem;
    }

    @media screen and (min-width: 768px) {
      width: 66%;
    }
  }

  &__img {
    width: 100%;
    object-fit: cover;
    border-radius: inherit;
    max-height: 40em;

    &-wrapper {
      display: flex;
      justify-content: center;
      border-radius: 8px;
        width: 100%;
      margin-bottom: 3rem;


      @media screen and (min-width: 768px) {
      margin-bottom: unset;
      width: 30%;
      }
    }
  }
}

</style>