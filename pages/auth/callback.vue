<script setup lang="ts">
// Composables
const router = useRouter();
const route = useRoute();
const runtimeConfig = useRuntimeConfig();

// State
const code = route.query.code as string;

// Methods
async function getAccessToken(code: string) {
    try {
        const response = await fetch(
            "https://api.clickup.com/api/v2/oauth/token" +
                "?client_id=" +
                runtimeConfig.public.clientId +
                "&client_secret=" +
                runtimeConfig.public.clientSecret +
                "&code=" +
                code,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );

        if (!response.ok) {
            throw new Error("Failed to get access token");
        }

        const data = await response.json();
        // Store the access token securely (you might want to use a more secure storage method)
        localStorage.setItem("clickup_access_token", data.access_token);

        // toast({
        //     title: "Success",
        //     description: "Successfully connected to ClickUp",
        // });

        // Redirect to the dashboard or home page
        router.push("/");
    } catch (error) {
        console.error("Error getting access token:", error);
        // toast({
        //     title: "Error",
        //     description: "Failed to connect to ClickUp",
        //     variant: "destructive",
        // });
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
