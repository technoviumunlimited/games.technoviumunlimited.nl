<template>
    <div class="flex-1 basis-72 flex flex-col gap-5">
      <Category
        :key="defaultCategory._id"
        :category="defaultCategory"
        :active="activeCategory === defaultCategory._id"
      @click="setActiveCategory(defaultCategory._id)"
      />
      <Category
        v-for="category in data.BlogsCategories"
        :key="category._id"
        :category="category"
        :active="activeCategory === category._id"
        @click="setActiveCategory(category._id)"
      />
    </div>
  </template>

<script setup>
const defaultCategory = {
  _id: 'default',
  name: 'Latest and Greatest'
};

const props = defineProps({
  data: {
    type: Object,
    required: true,
  },
  activeCategory: {
    type: String,
    required: true,
  },
});

const emit = defineEmits();

const setActiveCategory = (categoryId) => {
  console.log('setActiveCategory called with category ID:', categoryId);
  emit('update:activeCategory', categoryId);
};
</script>