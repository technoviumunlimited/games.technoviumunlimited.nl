<template>
  <div class="hall-of-fame p-8">
    <h1 class="text-3xl font-bold mb-6">Hall of Fame</h1>
    <div class="flex">
      <div class="w-1/4 pr-4 bg-gray-300 rounded-tl-lg rounded-bl-lg p-4 text-center">
        <!-- Navigation options go here -->
        <div @click="selectTab('Frontenders')" :class="{ 'font-bold': selectedTab === 'Frontenders' }" class="cursor-pointer mb-4">Frontenders</div>
        <div @click="selectTab('Backenders')" :class="{ 'font-bold': selectedTab === 'Backenders' }" class="cursor-pointer mb-4">Backenders</div>
        <div @click="selectTab('Gamemakers')" :class="{ 'font-bold': selectedTab === 'Gamemakers' }" class="cursor-pointer mb-4">Gamemakers</div>
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
    selectedTab: 'Frontenders', // Default selected tab
    people: [
      // Sample data, replace with your actual data
      { id: 1, logo: '/path/to/logo1.png', name: 'John Doe', position: 'CEO', role: 'Frontenders' },
      { id: 2, logo: '/path/to/logo2.png', name: 'Jane Smith', position: 'CTO', role: 'Backenders' },
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
