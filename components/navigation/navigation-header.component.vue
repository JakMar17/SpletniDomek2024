<template>
    <div
        class="is-flex is-flex-wrap-wrap is-justify-content-space-between is-align-items-center"
        style="min-height: 8em; padding: 0 4em"
    >
        <NuxtLink
            to="/"
            class="title mb-0"
            style="font-weight: 800; font-size: 32px; flex-grow: 1"
        >
            JM
        </NuxtLink>
        <div class="nav__wrapper is-hidden-touch">
            <div class="is-flex nav__buttons">
                <NuxtLink
                    v-for="[link, name] of urls"
                    :key="link"
                    :to="link"
                    class="button is-white is-rounded"
                    :class="{ 'link--active': isActive(link) }"
                    >{{ name }}</NuxtLink
                >
            </div>
        </div>
        <div
            class="is-flex is-align-items-center is-justify-content-flex-end social__wrapper is-hidden-touch"
        >
            <NavigationExternalLinksComponent />
        </div>

        <div class="is-hidden-desktop">
            <button
                class="button__rounded is-dark"
                aria-label="Odpri navigacijski menu"
                @click="onMobileMenuToggle()"
            >
                <i class="ri-menu-line" />
            </button>
        </div>
    </div>
    <div
        v-if="isMobileMenuVisible"
        id="mobileMenu"
        ref="mobileMenu"
        class="is-flex is-flex-direction-column is-align-items-center is-justify-content-space-between"
    >
        <div
            class="is-flex is-justify-content-space-between is-align-items-center"
            style="min-height: 8em; margin: 0 4em; align-self: stretch"
        >
            <NuxtLink
                to="/"
                class="title mb-0"
                style="font-weight: 800; font-size: 32px; flex-grow: 1"
            >
                JM
            </NuxtLink>
            <button
                class="button__rounded is-dark"
                aria-label="Zapri navigacijski menu"
                @click="onMobileMenuToggle()"
            >
                <i class="ri-close-line" />
            </button>
        </div>

        <div
            class="is-flex is-flex-direction-column is-justify-content-center is-align-items-center"
            style="gap: 1rem"
        >
            <div v-for="[link, name] of urls" :key="link">
                <NuxtLink
                    :to="link"
                    class="button is-white is-rounded"
                    :class="{ 'link--active': isActive(link) }"
                >
                    <span
                        style="
                            font-family: 'Inter Tight', serif;
                            font-size: 28px;
                            font-weight: 500;
                            letter-spacing: 1.5px;
                        "
                    >
                        {{ name }}
                    </span>
                </NuxtLink>
            </div>
        </div>

        <div class="is-flex" style="gap: 0.55em">
            <NavigationExternalLinksComponent />
        </div>
    </div>
</template>

<script lang="ts" setup>
const route = useRoute()

const isMobileMenuVisible = ref(false)
const mobileMenu = ref(null)

const urls = [
    ['/projekti', 'Projekti'],
    ['/cv', 'Izkušnje'],
    ['/jaz', 'O meni'],
]

const onMobileMenuToggle = () => {
    isMobileMenuVisible.value = !isMobileMenuVisible.value
    setTimeout(() => {
        mobileMenu.value.style.opacity = isMobileMenuVisible.value ? 0 : 1
        setTimeout(() => {
            mobileMenu.value.style.opacity = isMobileMenuVisible.value ? 1 : 0
        }, 400)
    }, 0)
}

const isActive = (linkName: string): boolean =>
    route.fullPath.includes(linkName)

watch(
    () => route.fullPath,
    () => {
        if (isMobileMenuVisible.value) {
            onMobileMenuToggle()
        }
    }
)
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
        background: white;
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
        gap: 0.55em;
        flex-grow: 1;
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

#mobileMenu {
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    background: white;
    z-index: 99;
    opacity: 0;
    transition: opacity 0.4s;
    padding-bottom: 8rem;
}
</style>
