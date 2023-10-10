<script setup>
const img = useImage()

const route = useRoute();

const { pending, data: blogData } = useFetch('https://api.technoviumunlimited.nl/v1/blogs/' + route.params.id, {
  lazy: true
})
</script>

<template>
    <div class="container mx-auto mt-12 md:mt-24 max-w-[80rem]">
        <div class="bg-bgsecondary flex flex-col rounded-lg overflow-hidden shadow-lg">
            <div class="w-full aspect-vido bg-slate-200 pb-[56.25%] relative"><NuxtImg class="w-full absolute left-0 top-0 aspect-video" v-bind:src="blogData.src" loading="lazy" /></div>
            <div class="flex flex-col gap-5 p-8 md:p-12">
                <div class="flex flex-col gap-1">
                    <div class="flex flex-row gap-3 items-center font-semibold text-sm group-first:text-base" v-bind:style="{ color: blogData.color }"><div class="h-2 w-2" v-bind:style="{ backgroundColor: blogData.color }"></div><div>{{ blogData.category }}</div></div>
                    <div class="text-xl md:text-3xl font-bold">{{ blogData.name }}</div>
                    <div class="text-light">Geplaatst op {{ blogData.date }}</div>
                </div>
                <div class="text-light whitespace-break-spaces">{{ blogData.content }}</div>
            </div>
        </div>
    </div>
</template>