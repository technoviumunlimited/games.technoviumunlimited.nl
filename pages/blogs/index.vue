<script setup lang="ts">
let blogsPerPage = 10;

const page = ref<number>(1)

// Set active category
const activeCategory = ref<string>('default');

let queryString = computed(() => {
  let values = '?take=' + (page.value * blogsPerPage);;

  if (activeCategory.value !== 'default') {
    values += '&category=' + activeCategory.value;
  }

  return values;
});

const { data: blogData, error: blogError, pending: blogPending, refresh: blogRefresh } = await useFetch('https://api.technoviumunlimited.nl/v1/blogs' + queryString.value, {
  watch:[activeCategory, ]
});
const { data: blogDataTop, error: blogErrorTop, pending: blogPendingTop, refresh: blogRefreshTop } = await useFetch('https://api.technoviumunlimited.nl/v1/blogs', {
  query: {take:3}
});
const { data: categories, error: categoriesError, pending: categoriesPending, refresh: categoriesRefresh } = await useFetch('https://api.technoviumunlimited.nl/v1/blogscategories');

function loadMore() {
  page.value++;
}

</script>

<template>
  <div>
    <BlogCardListTop :data="blogDataTop" :loading="blogPendingTop" />
    <div class="container mx-auto flex flex-col gap-8 mt-12 md:mt-24">
      <h2 class="font-black text-3xl md:text-5xl">Browse Topics</h2>
      <div class="flex flex-col md:flex-row gap-8 md:gap-24">
        <Categories
          :data="categories"
          :loading="categoriesPending"
          :activeCategory="activeCategory"
          @update:activeCategory="activeCategory = $event"
        />
        <div class="flex-1 basis-full flex flex-col items-center gap-8">
          <BlogCardList :data="blogData" :loading="blogPending" />
          <button @onclick="loadMore()"
            class="flex flex-row items-center justify-center gap-3 h-8 w-28 lg:h-12 lg:w-36 border-2 border-bgbuttonprimary text-bgbuttonprimary hover:border-primary hover-text-primary rounded-lg uppercase"
          >
            Load more
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
