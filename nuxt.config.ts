// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
        head: {
            htmlAttrs: {
                lang: 'sl-SI',
            },
        },
    },
    css: [
        "@/assets/styles/main.scss",
        "@/node_modules/remixicon/fonts/remixicon.css"
    ],
    build: {
        transpile: [],
    },
    vite: {
        define: {
            'process.env.DEBUG': true,
        },
        server: {
            hmr: {
                port: 3008
            }
        },
        css: {
            preprocessorOptions: {
                scss: {}
            }
        }

    },
    plugins: [
    ],
    modules: ['@nuxt/content', 'v-plausible', 'nuxt-aos', ["@nuxtjs/google-fonts", {
        families: {
            'Noto Sans JP': [800],
            'Inter Tight': {
                wght: '100..900',
                ital: '100..900'
            }
        }
    }]],
    plausible: {
        init: {
            domain: 'jakob.marela.team',
            apiHost: 'https://plausible.sven.marela.team/',
            trackLocalhost: false
        },
        partytown: false,
    }
})