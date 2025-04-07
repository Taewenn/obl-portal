import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: "2024-11-01",
    devtools: { enabled: true },
    runtimeConfig: {
        public: {
            clientId: import.meta.env.CLICKUP_CLIENT_ID,
            clientSecret: import.meta.env.CLICKUP_CLIENT_SECRET,
            redirectUri: import.meta.env.CLICKUP_REDIRECT_URI,
        },
    },
    css: ["~/assets/css/tailwind.css"],

    vite: {
        plugins: [tailwindcss()],
    },
    components: {
        global: true,
        dirs: ["~/components"],
    },
    modules: ["shadcn-nuxt", "@pinia/nuxt"],
    shadcn: {
        /**
         * Prefix for all the imported component
         */
        prefix: "",
        /**
         * Directory that the component lives in.
         * @default "./components/ui"
         */
        componentDir: "./components/ui",
    },
});
