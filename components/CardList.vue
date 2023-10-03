<template>
  <div class="container mx-auto py-4 lg:py-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
    <Card v-for="card in cards" :key="card.name" :card="card" />
  </div>
</template>

<script>
import Card from '~/components/Card.vue';

export default {
  components: {
    Card,
  },
  props: {
    cards: {
      type: Array,
      required: true,
    },
  },
};
</script>