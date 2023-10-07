<template>
    <a v-bind:href="card.link" class="flex-1 flex basis-full flex-col group-[.top]/top:first:lg:flex-row group-[.top]/top:first:lg:items-stretch group-[.top]/top:first:lg:justify-stretch bg-bgsecondary group/card rounded-lg overflow-hidden h-fit p-4 shadow-md">
        <div class="flex-1 basis-1/2 xl:basis-1/3 bg-slate-200 overflow-hidden relative min-h-[15rem] group-[.top]/top:group-first/card:lg:min-h-[20rem] rounded-lg"><img class="object-cover absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 min-w-full min-h-full rounded-lg" v-bind:src="card.src" loading="lazy"></div>
        <div class="flex-1 basis-1/2 group-[.top]/top:group-first/card:pl-8 px-4 pt-8 flex flex-col gap-3 justify-center">
          <div class="flex flex-row gap-5 items-center"><div class="flex flex-row gap-3 items-center font-semibold text-sm group-[.top]/top:group-first/top:text-base" v-bind:style="{ color: card.color }"><div class="h-2 w-2" v-bind:style="{ backgroundColor: card.color }" data-v-inspector="components/Card.vue:9:11"></div><div data-v-inspector="components/Card.vue:10:11">{{ card.category }}</div></div><div class="h-1 w-1 rounded-full bg-light"></div><div class="text-light text-sm">Geplaatst op {{ card.date }}</div></div>
          <div class="text-2xl group-[.top]/top:group-first/card:text-3xl font-bold">{{ card.name }}</div>
          <div class="grid group-[.top]/top:group-first/card:block grid-rows-[0fr] group-hover/card:grid-rows-[1fr] transition-[grid-template-rows] duration-300 ease-out"><div class="overflow-hidden group-[.top]/top:group-first/card:text-lg text-light">{{ card.description }}</div></div>
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
};
</script>