<template>
    <a v-bind:href="card.link" class="flex-1 flex basis-full flex-col first:lg:flex-row first:lg:items-stretch first:lg:justify-stretch bg-bgsecondary group rounded-lg overflow-hidden h-fit">
        <div class="flex-1 basis-1/2 xl:basis-1/3 bg-slate-200 overflow-hidden relative min-h-[15rem] group-first:lg:min-h-[20rem]"><img class="object-cover absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 min-w-full min-h-full" v-bind:src="card.src"></div>
        <div class="flex-1 basis-1/2 p-8 flex flex-col gap-3 justify-center">
          <div class="text-xl group-first:text-3xl font-bold">{{ card.name }}</div>
          <div class="text-light group-first:text-lg">Geplaatst op {{ card.date }}</div>
          <div class="grid group-first:block grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-300 ease-out"><div class="overflow-hidden group-first:text-lg">{{ card.description }}</div></div>
          <div class="flex flex-row gap-3 items-center font-semibold text-sm group-first:text-base" v-bind:style="{ color: card.color }"><div class="h-2 w-2" v-bind:style="{ backgroundColor: card.color }" data-v-inspector="components/Card.vue:9:11"></div><div data-v-inspector="components/Card.vue:10:11">{{ card.category }}</div></div>
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