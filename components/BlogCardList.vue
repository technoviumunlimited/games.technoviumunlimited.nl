<template>
    <div class="flex flex-row gap-5 [&>*:nth-child(n+2)]:md:basis-2/5 [&>*:nth-child(n+4)]:lg:basis-1/4 container flex-wrap mx-auto mt-12 md:mt-24">
      <BlogCard v-for="card in blogcards" :key="card.name" :card="card" />
    </div>
  </template>
  
  <script>
  export default {
    props: {
      blogcards: {
        type: Array,
        required: true,
      },
    },
  };
  </script>