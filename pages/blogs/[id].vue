<script setup>
const route = useRoute();
const { data, error, pending, refresh } = await useFetch(`https://api.technoviumunlimited.nl/v1/blogs/` + route.params.id)
</script>


<template>
    <div class="container mx-auto mt-12 md:mt-24 mb-24">
    <span v-if="pending">Loading...</span>

    <div v-else-if="data">
        <Blog :data="data.blog[0]" />
    </div>

    <span v-else-if="error">Error: {{ error }}</span>
    </div>
</template>