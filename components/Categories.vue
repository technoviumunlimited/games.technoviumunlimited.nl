<template>
    <div class="flex-1 basis-72 flex flex-col gap-5">
      <Category
        :key="defaultCategory.id"
        :category="defaultCategory"
        :active="isActiveCategory(defaultCategory.id)"
        @categoryClicked="setActiveCategory(defaultCategory.id)"
      />
      <Category
        v-for="category in categories"
        :key="category.id"
        :category="category"
        :active="isActiveCategory(category.id)"
        @categoryClicked="setActiveCategory(category.id)"
      />
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        activeCategory: 1, // Initially, set the first category as active
        defaultCategory: {
          id: 1,
          name: 'Latest and Greatest',
        },
        // ...
      };
    },
    props: {
      categories: {
        type: Array,
        required: true,
      },
    },
    methods: {
      isActiveCategory(categoryId) {
        return this.activeCategory === categoryId;
      },
      setActiveCategory(categoryId) {
        this.activeCategory = categoryId;
      },
    },
  };
  </script>
  