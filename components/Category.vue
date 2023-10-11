<template>
    <div :class="['group/button', { active: active }]">
      <button
        @click="handleCategoryClick"
        class="w-fit py-2 px-4 border-2 border-transparent hover:border-primary hover:text-primary rounded-lg text-left"
        :class="{ 'border-primary text-primary': active }"
      >
        {{ category.name }}
      </button>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      category: {
        type: Object,
        required: true,
      },
      active: {
        type: Boolean,
        required: true,
      },
    },
    methods: {
      handleCategoryClick() {
        // Emit the 'categoryClicked' event with the category's ID
        this.$emit('categoryClicked', this.category.id);
      },
    },
  };
  </script>
  