<template>
    <!-- <HallOfFameCard v-for="card in cards" :key="card.name" :card="card" /> -->
    <div class="w-3/4 flex flex-wrap bg-white rounded-tr-lg rounded-br-lg p-4">
      <!-- Display people information here -->
      <HallOfFameCard v-for="person in cards" :key="person.id" :person="person" />
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
  mounted() {
    console.log(this.cards);
  }
};
</script>