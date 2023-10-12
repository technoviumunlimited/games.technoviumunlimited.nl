<template>
    <a :href="'blogs/' + card._id" class="flex-1 flex basis-full flex-col group-[.top]/top:first:lg:flex-row group-[.top]/top:first:lg:items-stretch group-[.top]/top:first:lg:justify-stretch bg-bgsecondary group/card rounded-lg overflow-hidden p-4 shadow-md hover:-translate-y-1 transition duration-300 ease-in-out">
        <div class="flex-1 basis-1/2 xl:basis-1/3 bg-slate-200 overflow-hidden relative min-h-[15rem] group-[.top]/top:group-first/card:lg:min-h-[20rem] rounded-lg"><img class="object-cover absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 min-w-full min-h-full rounded-lg" v-bind:src="card._thumb[0]" loading="lazy"></div>
        <div class="flex-1 basis-1/2 group-[.top]/top:group-first/card:pl-8 px-4 pt-8 flex flex-col gap-3">
          <div class="flex flex-row gap-5 items-center"><div class="flex flex-row gap-3 items-center font-semibold text-sm group-[.top]/top:group-first/top:text-base" v-bind:style="{ color: card.color }"><div class="h-2 w-2" v-bind:style="{ backgroundColor: card.color }" data-v-inspector="components/Card.vue:9:11"></div><div data-v-inspector="components/Card.vue:10:11">{{ card.category }}</div></div><div class="h-1 w-1 rounded-full bg-light"></div><div class="text-light text-sm">Geplaatst op INSERT DATE</div></div>
          <div class="text-2xl group-[.top]/top:group-first/card:text-3xl font-bold">{{ card.title }}</div>
          <div class="grid group-[.top]/top:group-first/card:block grid-rows-[1fr] group-hover/card:grid-rows-[1fr] transition-[grid-template-rows] duration-300 ease-out max-h-[20rem]"><p class="group-[.top]/top:group-first/card:text-lg text-light line-clamp-6">{{ card.description }}</p></div>
        </div>
    </a>
</template>

<script>
export default {
  props: {
    card: {
      type: Object,
      required: true,
    },
  },
  methods: {
    formatDate(timestamp) {
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