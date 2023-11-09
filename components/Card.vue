<template>
  <a :href="'games/' + card._id" class="flex flex-col bg-bgsecondary rounded-xl overflow-hidden hover:-translate-y-3 transition duration-300 ease-in-out">
    <div class="gradient-top relative h-44 flex-none">
        <img :src="card._thumb" alt="Card Image" class="max-h-full min-w-full object-cover h-44 object-center">
    </div>
    <div class="p-6 flex flex-col gap-1 flex-1 justify-center">
        <h3 class="text-base font-black">{{ card.name }}</h3>
        <div v-for="category in card.caregory" class="flex flex-row gap-3 items-center text-primary font-semibold text-sm">
          <div class="h-2 w-2" v-bind:style="{backgroundColor: categroy.color}"></div>
          <div>{{ category.name }}</div>
        </div>
        <div class="text-xs text-light">
          <!--<span>Auteurs: </span><span>{{ card.created_by }}</span>-->
        </div>
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