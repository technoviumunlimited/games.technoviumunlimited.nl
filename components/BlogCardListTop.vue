<template>
    <div class="flex flex-row gap-5 [&>*:nth-child(n+2)]:md:basis-96 container flex-wrap mx-auto mt-12 md:mt-24 group/top top">
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