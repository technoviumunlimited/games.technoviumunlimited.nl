<script setup lang="ts">
const img = useImage()

const route = useRoute();

const blogState = reactive<{
    loading: boolean;
    blog: any;
    errors: string[];
}>({
    loading: true,
    blog: {},
    errors: [],
});

try {
    blogState.blog = await getBlog();
    console.log(blogState.blog)
} catch (error: any) {
    blogState.errors.push(error.message);
}

async function getBlog() {
    const response = await useFetch('https://api.technoviumunlimited.nl/v1/blogs/' + route.params.id);
    return response.data;
}
</script>

<template>
    <div class="container mx-auto mt-12 md:mt-24 max-w-[80rem]">
        <div v-if="blogState.loading">Loading...</div>
        <div v-else class="bg-bgsecondary flex flex-col rounded-lg overflow-hidden shadow-lg">
            <div class="w-full aspect-vido bg-slate-200 pb-[56.25%] relative">
                <NuxtImg class="w-full absolute left-0 top-0 aspect-video" :src="blogState.blog.data._rawValue.blog[0]._thumb[0]" loading="lazy" />
            </div>
            <div class="flex flex-col gap-5 p-8 md:p-12">
                <div class="flex flex-col gap-1">
                    <div class="flex flex-row gap-3 items-center font-semibold text-sm group-first:text-base" style="color:red">
                        <div class="h-2 w-2" style="background-color: red;"></div>
                        <div>{{ blogState.blog.data._rawValue.blog[0].category }}</div>
                    </div>
                    <div class="text-xl md:text-3xl font-bold">{{ blogState.blog.data._rawValue.blog[0].title }}</div>
                    <div class="text-light">Geplaatst op {{ formatDate(blogState.blog.data._rawValue.blog[0].date.seconds) }}</div>
                </div>
                <div class="text-light whitespace-break-spaces">{{ blogState.blog.data._rawValue.blog[0].content }}</div>
            </div>
        </div>
    </div>
</template>


<script lang="ts">
export default {
  methods: {
    formatDate(timestamp: number) {
      const date = new Date(timestamp * 1000); // Convert to milliseconds
      const month = date.getMonth() + 1; // Months are zero-based
      const day = date.getDate();
      const year = date.getFullYear();

      // Use padStart to ensure two-digit format for month and day
      const formattedDate = `${month.toString().padStart(2, '0')}/${day.toString().padStart(2, '0')}/${year}`;

      return formattedDate;
    },
  },
};
</script>