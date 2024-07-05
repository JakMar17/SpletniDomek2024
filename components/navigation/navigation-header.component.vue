<template>
  <div class="is-flex is-flex-wrap-wrap is-justify-content-space-between is-align-items-center" style="min-height: 8em; padding: 0 4em;">
    <NuxtLink to="/" class="title mb-0" style="font-weight: 800; font-size: 32px; flex-grow: 1">
      JM
    </NuxtLink>
    <div class="nav__wrapper">
      <div class="is-flex nav__buttons">
        <NuxtLink to="projekti" class="button is-white is-rounded" :class="{'link--active': isActive('projekti')}">Projekti</NuxtLink>
        <NuxtLink to="cv" class="button is-white is-rounded" :class="{'link--active': isActive('cv')}">Izkušnje</NuxtLink>
        <NuxtLink to="jaz" class="button is-white is-rounded" :class="{'link--active': isActive('jaz')}">O meni</NuxtLink>
      </div>
    </div>
    <div class="is-flex is-align-items-center is-justify-content-flex-end social__wrapper" >
      <a href="https://github.com/jakmar17" target="_blank" class="button__rounded is-dark">
        <i class="ri-github-fill"></i>
      </a>
      <a href="https://www.linkedin.com/in/jakmar17" target="_blank" class="button__rounded is-dark">
        <i class="ri-linkedin-fill"></i>
      </a>
      <a href="mailto://jakob.marusic17@gmail.com" target="_blank" class="button__rounded is-dark">
        <i class="ri-mail-open-line"></i>
      </a>
      <a href="https://facebook.com/jakmar17" target="_blank" class="button__rounded is-dark">
        <i class="ri-facebook-fill"></i>
      </a>
    </div>
  </div>
</template>

<script lang="ts" setup>
const route = useRoute();

const isActive = (linkName: string): boolean =>
  route.fullPath.includes(linkName);

</script>


<style lang="scss" scoped>
$box-shadow: 5px 5px 10px 2px rgba(0, 0, 0, 0.125);

.nav {
  &__wrapper {
    flex-grow: 1;
    display: flex;
    justify-content: center;
  }

  &__buttons {
    gap: 0.25em;
    padding: 0.25em;
    border-radius: 9999px;
    -webkit-box-shadow: $box-shadow;
    -moz-box-shadow: $box-shadow;
    box-shadow: $box-shadow;
  }

  a {
    min-width: 6em;
  }
}

.social {
  &__wrapper {
    gap: 0.55em; flex-grow: 1;
  }
}

.button__rounded {
  height: 36px;
  width: 36px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 9999px;
  border: none;
  transition: 0.3s;

  &.is-dark {
    background: hsl(0, 0%, 21%);

    &:hover {
      background: hsl(0, 0%, 75%);
    }
  }

  i {
    color: white;
    font-size: 18px;
  }
}

.link {
  &--active {
    background: #f2f2f2;
  }
}
</style>