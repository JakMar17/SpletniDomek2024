<template>
  <div class="is-flex is-flex-direction-column" style="min-height: 100vh">
    <NavigationHeaderComponent></NavigationHeaderComponent>
    <div style="flex-grow: 1">
      <slot/>
    </div>
  </div>
</template>