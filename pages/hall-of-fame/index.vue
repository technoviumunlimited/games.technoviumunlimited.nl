<template>
  <div class="hall-of-fame p-8">
    <h1 class="text-3xl font-bold mb-6 ml-16">Hall of Fame</h1>
    <div class="flex">
      <div class="w-1/4 pr-4 bg-gray-300 rounded-tl-lg rounded-bl-lg p-4 text-center">
        <!-- Navigation options go here -->
        <div @click="selectTab('Frontend')" :class="{ 'font-bold': selectedTab === 'Frontend' }" class="cursor-pointer mb-4">Frontend</div>
        <div @click="selectTab('Backend')" :class="{ 'font-bold': selectedTab === 'Backend' }" class="cursor-pointer mb-4">Backend</div>
        <div @click="selectTab('Gamemaker')" :class="{ 'font-bold': selectedTab === 'Gamemaker' }" class="cursor-pointer mb-4">Gamemaker</div>
        <!-- Add more options as needed -->
      </div>
      <HallOfFameCardList :cards="filteredPeople" />
    </div>
  </div>
</template>

<script>
export default {
data() {
  return {
    selectedTab: 'Frontend', // Default selected tab
    people: [
      // Sample data, replace with your actual data
      { id: 1, logo: '../../public/img/book.png', name: 'Juul van Tilburg', position: 'Software Developer', role: 'Frontend', description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr,' },
      { id: 2, logo: '../../public/img/book.png', name: 'Iris Reijnen', position: 'Software Developer', role: 'Backend', description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr,' },
      { id: 3, logo: '../../public/img/book.png', name: 'Iris Reijnen', position: 'Software Developer', role: 'Frontend', description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr,' },
      // Add more people as needed
    ],
  };
},
computed: {
  filteredPeople() {
    return this.people.filter(person => person.role === this.selectedTab);
  },
},
methods: {
  selectTab(tab) {
    this.selectedTab = tab;
  },
},
};
</script>
