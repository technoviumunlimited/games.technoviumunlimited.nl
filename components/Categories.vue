<template>
    <div class="flex-1 basis-72 flex flex-col gap-5">
      <Category
        :key="defaultCategory.id"
        :category="defaultCategory"
        :active="isActiveCategory('')"
        @categoryClicked="setCategory('')"
      />
      <Category
        v-for="category in categories"
        :key="category.id"
        :category="category"
        :active="isActiveCategory(category.id)"
        @categoryClicked="setCategory(category.id)"
      />
    </div>
  </template>
  
  <script>
export default {
  data() {
    return {
      defaultCategory: {
        id: 'default',
        name: 'Latest and Greatest',
      },
      // ...
    };
  },
  
  props: {
    activeCategory: {
      type: String,
      required: true,
    },
  },
  
  methods: {
    isActiveCategory(categoryId) {
      return categoryId === this.activeCategory;
    },
  },
};
</script>
  