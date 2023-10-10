<script setup>
const route = useRoute();
const { data, error, pending, refresh } = await useFetch(`https://api.technoviumunlimited.nl/v1/blogs/` + route.params.id)
console.log(data)
</script>


<template>
    <div class="container mx-auto mt-12 md:mt-24">
    <span v-if="pending">Loading...</span>

    <div v-else-if="data">
        <Blog :data="data" />
    </div>

    <span v-else-if="error">Error: {{ error }}</span>
    </div>
</template>