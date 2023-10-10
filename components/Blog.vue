<template>
    <div class="bg-bgsecondary flex flex-col rounded-lg overflow-hidden shadow-lg">
        <div class="w-full bg-slate-200 pb-[56.25%] lg:pb-[37.5%] aspect-w-16 aspect-h-9 lg:aspect-h-6 relative">
            <NuxtImg class="w-full absolute object-cover left-0 top-0 h-full contain" :src="data.blog[0]._thumb[0]" loading="lazy" />
        </div>
        <div class="flex flex-col gap-5 p-8 md:p-12">
            <div class="flex flex-col gap-1">
                <div class="flex flex-row gap-3 items-center font-semibold text-sm group-first:text-base" style="color:red">
                    <div class="h-2 w-2" style="background-color: red;"></div>
                    <div>{{ data.blog[0].categorie }}</div>
                </div>
                <div class="text-xl md:text-3xl font-bold">{{ data.blog[0].title }}</div>
                <div class="text-light">Geplaatst op {{ formatDate(data.blog[0].date._seconds) }}</div>
            </div>
            <div class="text-sm lg:text-base text-light whitespace-break-spaces">{{ data.blog[0].discription }}</div>
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