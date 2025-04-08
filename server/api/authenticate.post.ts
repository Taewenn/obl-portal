export default defineEventHandler(async (event) => {
    const { code } = await readBody(event);
    const config = useRuntimeConfig();

    try {
        const response = await fetch(
            "https://api.clickup.com/api/v2/oauth/token" +
                "?client_id=" +
                config.public.clientId +
                "&client_secret=" +
                config.clientSecret +
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
        return { access_token: data.access_token };
    } catch (error) {
        throw createError({
            statusCode: 500,
            message: "Failed to authenticate with ClickUp",
        });
    }
});
