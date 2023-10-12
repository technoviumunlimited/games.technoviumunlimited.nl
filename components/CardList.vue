<template>
  <div class="container mx-auto py-4 lg:py-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
    <Card v-for="card in cards.games" :key="card.name" :card="card" />
  </div>
</template>

<script>
export default {
  props: {
    cards: {
      type: Array,
      required: true,
    },
  },
};
</script>