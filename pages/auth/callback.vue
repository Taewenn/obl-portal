<script setup lang="ts">
// Composables
const router = useRouter();
const route = useRoute();
const runtimeConfig = useRuntimeConfig();

// State
const code = route.query.code as string;

// Types
interface AuthenticateResponse {
    access_token: string;
}

// Methods
async function getAccessToken(code: string) {
    try {
        const { data } = await useFetch("/api/authenticate", {
            method: "POST",
            body: { code },
        });

        // Store the access token securely (you might want to use a more secure storage method)
        localStorage.setItem("clickup_access_token", data.value?.access_token);

        // Redirect to the dashboard or home page
        router.push("/");
    } catch (error) {
        console.error("Error getting access token:", error);
        router.push("/login");
    }
}

// Lifecycle hooks
onMounted(async () => {
    if (!code) {
        router.push("/login");
    }

    await getAccessToken(code);
});
</script>

<template>
    <div class="flex min-h-svh items-center justify-center">
        <div class="flex flex-col items-center gap-4">
            <div
                class="h-8 w-8 animate-spin rounded-full border-4 border-primary"
            />
            <p class="text-sm text-muted-foreground">
                Connecting to ClickUp...
            </p>
        </div>
    </div>
</template>
