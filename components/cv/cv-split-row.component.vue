<template>
    <div class="cv__row">
        <h3
            class="cv__company-cell is-gray"
            style="
                font-family: 'Inter Tight', sans-serif;
                font-size: 24px;
                font-weight: 500;
            "
        >
            {{ entityName }}
        </h3>
        <div class="cv__description-cell">
            <div style="margin-bottom: 2rem">
                <h4
                    style="
                        font-family: 'Inter Tight', sans-serif;
                        font-size: 20px;
                        font-weight: 600;
                    "
                >
                    {{ position }}
                </h4>
                <h5
                    style="
                        font-family: 'Inter Tight', sans-serif;
                        font-size: 20px;
                        font-weight: 300;
                    "
                >
                    {{ years }}
                </h5>
            </div>
            <p v-for="desc of description" :key="desc">
                {{ desc }}
            </p>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { CvCardModel } from '~/models'
defineProps<CvCardModel>()
</script>

<style scoped lang="scss">
.cv {
    &__row {
        width: 100%;
        padding: 2rem 0;

        &:not(:last-of-type) {
            border-bottom: 1px solid #999999;
        }

        @media screen and (min-width: 786px) {
            display: flex;
            //flex-wrap: wrap;
        }

        p {
            font-family: 'Inter Tight', sans-serif;
            font-size: 18px;
            font-weight: 300;

            &:not(:last-child) {
                margin-bottom: 1rem;
            }
        }
    }

    &__company-cell {
        @media screen and (min-width: 786px) {
            flex-grow: 1;
            width: 20%;
        }
    }

    &__description-cell {
        @media screen and (min-width: 786px) {
            flex-grow: 3;
            width: 66%;
        }
    }
}
</style>
