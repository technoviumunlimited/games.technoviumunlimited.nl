<template>
    <div :class="['group/button', { active: active }]">
      <button
        class="w-fit py-2 px-4 border-2 border-primary hover:border-primary hover:text-primary rounded-lg text-left"
        :class="{ 'text-primary': active, 'border-transparent' : !active }"
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
  };
  </script>
  