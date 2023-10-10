<script setup lang="ts">
// Set current page to 1 on start
let currentPage = 1;

// Set blogsPerPage
let blogsPerPage = 10;

// Set state for top blogs
const topblogState = reactive<{
    loading: boolean;
    blogs: any;
    errors: string[];
}>({
    loading: true,
    blogs: {},
    errors: [],
});

// Set state for categories
const categoriesState = reactive<{
    loading: boolean;
    categories: any;
    errors: string[];
}>({
    loading: true,
    categories: {},
    errors: [],
});

// Set active category
const activeCategory = ref<string>('category_id');

// Set state for bottom blogs
const blogState = reactive<{
    loading: boolean;
    blogs: any;
    errors: string[];
}>({
    loading: true,
    blogs: {},
    errors: [],
});

// Get all data
// Get 4 latest blogs
try {
    topblogState.blogs = await getBlogs(1, 4);
    topblogState.loading = false;
} catch (error: any) {
    topblogState.errors.push(error.message);
    topblogState.loading = false;
}

// Get all categories
try {
  const { data: categories } = useFetch('https://api.technoviumunlimited.nl/v1/blogcategories');
  categoriesState.categories = categories;
  categoriesState.loading = false;
} catch (error: any) {
  categoriesState.errors.push(error.message);
  categoriesState.loading = false;
}

// Get first page of blogs
try {
    blogState.blogs = await getBlogs(currentPage, blogsPerPage);;
    blogState.loading = false;
} catch (error: any) {
    blogState.errors.push(error.message);
    blogState.loading = false;
}

// Get blogs per page, amount of items per page and optional category
async function getBlogs(page : number, itemsPerPage: number, category?: string){
  const queryString = computed(() => {
    let values = '?page='+page;
    values += '&take='+itemsPerPage;
    if (category) {
      values += '&category='+category;
    }
    return values;
  });
  const { data: blogs } = useFetch('https://api.technoviumunlimited.nl/v1/blogs' + queryString.value, {
    lazy: true
  })

  return blogs;
}

// Add 10 new blogs
async function addBlogs() {
  currentPage++;
  try {
    const newBlogs = await getBlogs(currentPage, blogsPerPage);
    topblogState.blogs = { ...topblogState.blogs, ...newBlogs };
  } catch (error: any) {
    topblogState.errors.push(error.message);
  }
}

async function setCategory(category_id: string) {
  activeCategory.value = category_id;
}

// On active category change get 
async function onActiveCategoryChange(newValue: string, oldValue: string) {
    blogState.loading = true;
    currentPage = 1;
  try {
    if (newValue == "") {
      blogState.blogs = await getBlogs(currentPage, blogsPerPage);
      blogState.loading = false;
    } else {
      blogState.blogs = await getBlogs(currentPage, blogsPerPage, newValue);
      blogState.loading = false;
    }
  } catch (error: any) {
    blogState.errors.push(error.message);
    blogState.loading = false;
  }
}

// Watch activeCategory.value for changes
watch(activeCategory, onActiveCategoryChange);
</script>

<template>
  <div>
    <BlogCardListTop :blogcards="topblogState.blogs" :loading=topblogState.loading />

    <div class="container mx-auto flex flex-col gap-8 mt-12 md:mt-24">
      <h2 class="font-black text-3xl md:text-5xl">Browse Topics</h2>
      <div class="flex flex-col md:flex-row gap-8 md:gap-24">
        <Categories @categoryClicked="setCategory" :categories="categoriesState.categories" :loading=categoriesState.loading :activeCategory=activeCategory />
        <div class="flex-1 basis-full flex flex-col items-center gap-8">
          <BlogCardList :blogcards="blogState.blogs" :loading=blogState.loading />
          <button @onclick="addBlogs()" class="flex flex-row items-center justify-center gap-3 h-8 w-28 lg:h-12 lg:w-36 border-2 border-bgbuttonprimary text-bgbuttonprimary hover:border-primary hover:text-primary rounded-lg uppercase">Load more</button>
        </div>
      </div>
    </div>
  </div>
</template>