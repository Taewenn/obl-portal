<script setup lang="ts">
import { GalleryVerticalEnd } from "lucide-vue-next";

// State
const redirectToClickUp = () => {
    window.location.href =
        "https://app.clickup.com/api?client_id=V93TTTE9ZOK9TO98QIE7OSQHHP2FS0VL&redirect_uri=http://localhost:3000/auth/callback";
};
</script>

<template>
    <div class="flex flex-col gap-6">
        <form>
            <div class="flex flex-col gap-6">
                <div class="flex flex-col items-center gap-2">
                    <a
                        href="#"
                        class="flex flex-col items-center gap-2 font-medium"
                    >
                        <div
                            class="flex size-8 items-center justify-center rounded-md"
                        >
                            <GalleryVerticalEnd class="size-6" />
                        </div>
                        <span class="sr-only">Orange Bleu.</span>
                    </a>
                    <h1 class="text-xl font-bold">
                        Bienvenue sur votre portail Orange Bleu.
                    </h1>
                    <div class="text-center text-sm">
                        Pas encore inscrit ?
                        <a
                            href="mailto:web@orangebleu.be"
                            class="underline underline-offset-4"
                        >
                            Demander un accès
                        </a>
                    </div>
                </div>
                <Button
                    variant="outline"
                    type="button"
                    class="w-full"
                    @click="redirectToClickUp"
                >
                    <ClickUpLogo class="size-4" />
                    Se connecter avec ClickUp
                </Button>
            </div>
        </form>
        <div
            class="text-muted-foreground *:[a]:hover:text-primary text-center text-xs text-balance *:[a]:underline *:[a]:underline-offset-4"
        >
            En cliquant sur continuer, vous acceptez nos
            <a href="#">Conditions d'utilisation</a> et
            <a href="#">Politique de confidentialité</a>.
        </div>
    </div>
</template>
