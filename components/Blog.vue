<template>
    <div class="bg-bgsecondary flex flex-col rounded-lg overflow-hidden shadow-lg">
        <div class="w-full bg-slate-200 pb-[56.25%] lg:pb-[37.5%] aspect-w-16 aspect-h-9 lg:aspect-h-6 relative">
            <NuxtImg class="w-full absolute object-cover left-0 top-0 h-full contain" :src="data._thumb[0]" loading="lazy" />
        </div>
        <div class="flex flex-col gap-5 p-8 md:p-12">
            <div class="flex flex-col gap-1">
                <div v-for="category in data.category" class="flex flex-row gap-3 items-center font-semibold text-sm group-first:text-base" v-bind:style="{color: category.color}">
                    <div class="h-2 w-2" v-bind:style="{backgroundColor: category.color}"></div>
                    <div>{{ category.name }}</div>
                </div>
                <h1 class="text-xl md:text-3xl font-bold">{{ data.title }}</h1>
                <div class="text-light">Geplaatst op {{ formatDate(data.date._seconds) }}</div>
            </div>
            <p class="text-sm lg:text-base text-light whitespace-break-spaces" v-html="data.description"></p>
        </div>
    </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
  methods: {
    formatDate(timestamp) {
      const date = new Date(timestamp * 1000); // Convert to milliseconds
      const day = date.getDate();
      const month = date.toLocaleString('default', { month: 'long' }); // Get full month name
      const year = date.getFullYear();

      const formattedDate = `${day} ${month}, ${year}`;

      return formattedDate;
    },
  },
};
</script>