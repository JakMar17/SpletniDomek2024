<template>
    <a
        href="https://github.com/jakmar17"
        target="_blank"
        class="button__rounded is-dark"
    >
        <i class="ri-github-fill" />
    </a>
    <a
        href="https://www.linkedin.com/in/jakmar17"
        target="_blank"
        class="button__rounded is-dark"
    >
        <i class="ri-linkedin-fill" />
    </a>
    <a
        href="mailto:jakob.marusic17@gmail.com"
        target="_blank"
        class="button__rounded is-dark"
    >
        <i class="ri-mail-open-line" />
    </a>
    <a
        href="https://facebook.com/jakmar17"
        target="_blank"
        class="button__rounded is-dark"
    >
        <i class="ri-facebook-fill" />
    </a>
</template>

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
