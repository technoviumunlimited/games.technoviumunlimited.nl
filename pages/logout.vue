<template>
    <div>
    Logging out
    </div>
</template>

<script setup>
    onMounted(async () => {
        try {
            const resultLogout = await signOutUser();
            console.log("Logout user:", resultLogout)
            //navigateTo("/login");
        } catch (error) {
            console.error(error);
            state.errors.push(error);
        }
    });
</script>