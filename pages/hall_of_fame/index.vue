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
      <div class="w-3/4 flex flex-wrap bg-white rounded-tr-lg rounded-br-lg p-4">
      <!-- Display people information here -->
        <div v-for="person in filteredPeople" :key="person.id" class="w-1/4 mb-4 px-4">
          <div class="person-container p-4 flex flex-col items-center">
            <img class="max-w-full h-auto mb-2 text-center" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEYAAAA6CAYAAAANzi8+AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAsdJREFUeNrsm7FLG1Ecx99dYhACchWkFASDndop1UWnJJub9j9IsEsnUejiIungajoXMZujl6mjl0kQqglCB0U4pwwdeqABJ+vvJ7/QItfrvUvu3Tvy+8LjJCQv7z7v93vv+8zvhGD5yoj6wddv19fgUoJW1OA+XGhdaM3rH/teImAACII4glbQcKIRSh3gNIbtKCMJpQqXb9AsTTNgEtrK9MxC4dfP85YSMBQph/TluqsIcAyA40TtwJR4757GkeKnHZjMQqxg6AvKKdxcqnFHzFpKd91S3GAsMWYyBWsoME5K78+NFQwYJofMU9rUUpFK9ZRBcWBC7djBkM1upgQKRndN2ZEAbTY4StyhljSG0oFWgYl0h+kk0umajgcbZPpGcphcfOj7vv7dzIeNEFwHWwDEN6r7u8syBtUzVEwhgDz+n3M+vb/wPxV+8A1qJ799UpEZA4D5LbM+sY9hg8dgGAyDYTAMhsEwGAbDYBgMi8EwGAbDYBgMg2EwDIbBMBgGwxo/MP3dZWtcwMjWFpfHBYwl+ZPramrB3BoZ2Y/shUwjjK6qZN8dbcBcGdLlw0W46aOg9YOi6jjCcG6yuoBxMlNi4R8VDwHCatIyAMACobb4U1qGQEoiegmuow2YtjkltkQv0npDqVId0VDc/PaJPqnUM3LiLFwtTNz6ot2u9DX7MukhYAFSUzswWD3VhrUmQdUgjTyVYDph3/h5YvYprVB0UaUmQLFV+5huaD8jMuJTbu7J15ivDFVQsHStloTBs4VEAfUleJqPuXlx9ybrKoqUSiLOl55TlKq7BTj2i9mHd/BnI6Zh4Zg2n0fKQIbKJKZHBw/ChDa094MHP8nW74jRPB7k0ZbcGCy0iYMhOGW6ST9XiqlTD6jVLRCcVUlX61E6ozu2g4AkBuYvQNazfx94AKQj0wdFkhUA2SUn6wrWaPQowAAPyLkOT2i3uwAAAABJRU5ErkJggg==" alt="logo">
            <!-- <img :src="person.logo" alt="Person Logo" class="max-w-full h-auto mb-2" /> -->
            <div class="text-center">
              <div class="font-bold text-lg">{{ person.name }}</div>
              <div class="text-gray-600">{{ person.position }}</div>
            </div>
          </div>
        </div>
      </div>
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
