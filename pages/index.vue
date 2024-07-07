<template>
  <div class="container mb-6">
    <div class="header__wrapper">
      <h1 class="header-h1">Jakob</h1>
      <h2 class="header-h2 is-gray">in to je moja zgodba na kratko</h2>
    </div>


    <div class="grid">
      <NuxtLink to="/jaz" id="aboutMe" class="grid__tile">
        <div class="img__wrapper">
          <img src="../assets/images/me.jpg.webp" alt="Portret avtorja strani - Jakoba"/>
        </div>
        <div class="title__wrapper">
          <h3 class="title tile__title has-text-right has-text-white has-text-shadow-black">Moja zgodba</h3>
          <div class="title tile__subtitle has-text-white has-text-right has-text-shadow-black">dolga je cesta z vasi do mesta</div>
        </div>
      </NuxtLink>

      <a href="https://majske-igre.si" target="_blank" class="div2 grid__tile is-flex is-justify-content-space-between pl-6 pt-6 is-flex-wrap-wrap" style="height: 20em; overflow: hidden">
        <div style="width: 40%">
          <h3 class="title tile__title">Majske igre</h3>
          <div class="title tile__subtitle">uradna spletna stran največjega študentskega festivala</div>
        </div>
        <div class="is-flex is-justify-content-flex-end" style="margin-top: 2rem">
          <img style="max-height: 20em; object-fit: cover" src="../assets/images/showcase/mi.png.webp" alt="Zaslonski posnetek spletne strani Majske igre"/>
        </div>
      </a>

      <a href="https://majca-za-kras.vercel.app/" target="_blank" class="div3 grid__tile is-flex is-justify-content-space-between pl-6 pt-6 is-flex-wrap-wrap" style="height: 20em; overflow: hidden">
        <div style="width: 80%">
          <h3 class="title tile__title">Majca za Kras</h3>
          <div class="title tile__subtitle">idejni vodja dobrodelne majice po največjem požaru v zgodovini Slovenije</div>
        </div>
        <div class="is-flex is-justify-content-flex-end" style="margin-top: 2rem; flex-grow: 1">
          <img style="max-height: 20em; object-fit: cover" src="../assets/images/showcase/majca_za_kras.png.webp" loading="lazy" alt="Majca za Kras"/>
        </div>
      </a>


      <NuxtLink to="/showcase/jakobov-spletni-domek" class="div4 grid__tile is-flex is-justify-content-space-between pl-6 pt-6 is-flex-wrap-wrap" style="height: 20em; overflow: hidden; background: #ac1d18">
        <div style="width: 80%">
          <h3 class="title tile__title has-text-white">Jakobov spletni domek</h3>
          <div class="title tile__subtitle has-text-white">po inspiraciji minimalističnega Mondrianovega platna</div>
        </div>
        <div class="is-flex is-justify-content-flex-end" style="margin-top: 2rem; flex-grow: 1">
          <img style="max-height: 20em; object-fit: cover" src="../assets/images/showcase/mondrian.jpg.webp" loading="lazy" alt="Mondrianovi kvadrati"/>
        </div>
      </NuxtLink>

      <a href="https://ssvets.si" target="_blank" class="div5 grid__tile is-flex is-justify-content-space-between pl-6 pt-6 is-flex-wrap-wrap" style="height: 20em; overflow: hidden">
        <div style="width: 80%">
          <h3 class="title tile__title">Študentski svet stanovalcev</h3>
          <div class="title tile__subtitle">spletna stran Študentskega sveta stanovalcev ŠDL</div>
        </div>
        <div class="is-flex is-justify-content-flex-end" style="margin-top: 2rem; flex-grow: 1">
          <img style="max-height: 20em; object-fit: cover" src="../assets/images/showcase/sss.png.webp" loading="lazy" alt="Zaslonski posnetek spletne strani"/>
        </div>
      </a>

      <a href="https://github.com/MarelaTeam-s-Majske-Igre/MajskeIgre" target="_blank" class="div6 grid__tile is-flex is-justify-content-space-between is-flex-direction-column pl-6 pt-6">
        <h3 class="title tile__title">Majske igre 2022</h3>
        <div class="title tile__subtitle">mobilna aplikacija Majskih iger 2022 za Android naprave</div>
        <div class="is-flex is-justify-content-flex-end">
          <img style="max-height: 30em; object-fit: cover" src="../assets/images/showcase/mi-app.png.webp" loading="lazy" alt="Zaslonski posnetek aplikacije Majske igre 2022"/>
        </div>
      </a>
    </div>
  </div>
</template>

<style scoped lang="scss">

//.header {
//  &__wrapper {
//    margin-top: 3em;
//    margin-bottom: 1em;
//
//    @media screen and (min-width: 768px) {
//      margin-top: 6em;
//      margin-bottom: 3em;
//    }
//  }
//
//  &__title {
//    font-size: 36px;
//    font-weight: 800;
//    color: black;
//    margin-bottom: 0.5rem !important;
//
//    @media screen and (min-width: 768px) {
//      margin-bottom: 1rem !important;
//      font-size: 56px;
//    }
//  }
//
//  &__subtitle {
//    color: rgba(0, 0, 0, 0.5);
//    font-size: 24px;
//    font-weight: 400;
//
//    @media screen and (min-width: 768px) {
//      font-weight: 700;
//      font-size: 28px;
//    }
//  }
//}

.grid {
  display: flex;
  flex-wrap: wrap;
  gap: 24px;

  &__tile {
    width: 100%;
    min-height: 40em;
    border-radius: 8px;
    transition: 0.5s;
    background: #f0f0f0;

    &:hover {
      $box-shadow: 10px 10px 10px 2px rgba(0, 0, 0, 0.125);

      -webkit-box-shadow: $box-shadow;
      -moz-box-shadow: $box-shadow;
      box-shadow: $box-shadow;
    }

    @media screen and (min-width: 1024px) {
      min-height: 20em;
    }
  }

  @media screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 12px;
  }

  @media screen and (min-width: 1024px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(4, 1fr);
    gap: 24px;

    .div2 {
      grid-area: 1 / 2 / 2 / 4;
    }

    .div3 {
      grid-area: 2 / 2 / 3 / 4;
    }

    .div4 {
      grid-area: 3 / 1 / 4 / 3;
    }

    .div5 {
      grid-area: 4 / 1 / 5 / 3;
    }

    .div6 {
      grid-area: 3 / 3 / 5 / 4;
    }
  }
}

#aboutMe {
  height: 40em;
  background: black;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;

  .img {
    &__wrapper {
      height: 80%;
      object-fit: cover;
      object-position: center center;
    }
  }

  .title__wrapper {
    margin: 0 2vw 4rem 2vw;
  }

  @media screen and (min-width: 1024px) {
    height: 42em;
    grid-area: 1 / 1 / 3 / 2;
  }
}

.tile {
  &__title {
    font-size: 32px;
    font-weight: 800;
    margin-bottom: 0.5rem;
  }

  &__subtitle {
    font-size: 20px;
  }
}

.has-text-shadow-black {
  text-shadow: 2px 2px 5px black
}

</style>
<script setup lang="ts">
</script>