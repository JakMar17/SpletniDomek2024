<template>
  <a v-for="{id, href, icon} of links"
     :href="href"
     @click="onLinkClickTrackEvent(id)"
     target="_blank"
     class="button__rounded is-dark"
  >
    <i :class="icon"/>
  </a>
</template>

<script lang="ts" setup>
const {trackEvent} = usePlausible()

const links: Array<{ id: string, href: string, icon: string }> = [
  {
    id: 'github',
    href: 'https://www.github.com/jakmar17',
    icon: 'ri-github-fill'
  },
  {
    id: 'linkedin',
    href: 'https://www.linkedin.com/in/jakmar17',
    icon: 'ri-linkedin-fill'
  },
  {
    id: 'mail',
    href: 'mailto:jakob.marusic17@gmail.com',
    icon: 'ri-mail-open-line'
  },
  {
    id: 'facebook',
    href: 'https://facebook.com/jakmar17',
    icon: 'ri-facebook-fill'
  }
]

const onLinkClickTrackEvent = (id: string) =>
    trackEvent(`External navigation click: ${id}`)
</script>

<style lang="scss" scoped>
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
</style>
