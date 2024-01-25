<template>
    <div class="relative h-full flex items-center justify-center">
      <!-- White background -->
      <div class="absolute left-0 top-0 h-full w-2/5 bg-gray-300"></div>
  
      <!-- Black background -->
      <div class="absolute right-0 top-0 h-full w-3/5"></div>
  
      <!-- Content container -->
      <div class="flex items-center w-full z-10">
        <!-- Text container -->
        <div class="w-2/5 text-black bg-transparent p-8">
          <p><strong>Worked on:</strong></p>
          <p>Frontend</p>
        </div>
  
        <!-- Image overlay with padding -->
        <div class="w-1/4 py-40">
          <img src="../../public/img/book.png" alt="Your Image" class="w-full h-full object-cover">
        </div>
  
        <!-- Text container -->
        <div class="w-3/5 bg-transparent p-16">
          <p class="pl-4"><strong>{{ person.name }}</strong></p>
          <p class="text-sm mb-4 pl-4">{{ person.position }}</p>
          <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, </p>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  const route = useRoute();
  const id = route.params.id;
  </script>
  
  <script>
  export default {
    computed: {
      person() {
        const personId = this.$route.params.id;
        const people = [
          { id: 1, logo: '/path/to/logo1.png', name: 'Juul van Tilburg', position: 'Software Developer', role: 'Frontenders' },
          { id: 2, logo: '/path/to/logo2.png', name: 'Iris Reijnen', position: 'Software Developer', role: 'Backenders' },
          { id: 3, logo: '/path/to/logo2.png', name: 'Iris Reijnen', position: 'Software Developer', role: 'Frontenders' },
          // Add more people as needed
        ];
        return people.find(person => person.id === parseInt(personId));
      },
    },
  };
  </script>
  
  