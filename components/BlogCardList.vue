<template>
    <div class="flex flex-row gap-5 [&>*:nth-child(n)]:md:basis-96 flex-wrap group">
      <BlogCard v-for="card in data.blogs" :key="card.name" :card="card" />
    </div>
  </template>
  
  <script>
  export default {
    props: {
      data: {
        type: Object,
        required: true,
      },
    },
  };
  </script>