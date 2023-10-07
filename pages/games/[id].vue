<template>
  <div class="container mx-auto mt-12 md:mt-24">
    <div class="flex flex-row gap-8 flex-wrap">
      <div class="flex-1 w-fit basis-2/3 bg-bgsecondary px-4 py-6 rounded-lg shadow-md">
        <div class="w-full aspect-w-16 aspect-h-9 h-[642px]" id="game" >
          <iframe class="w-full h-full" v-if="embeddedGameUrl"
            :src="embeddedGameUrl"
            frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen
          ></iframe>
        </div>
      </div>
      <div class="flex-1 basis-96 bg-bgsecondary rounded-lg shadow-md flex flex-col gap-3 p-8">
        <h1 class="font-black text-3xl">ROC NIJMEGEN MAZE</h1>
        <div class="flex flex-row items-center gap-5 font-black text-light text-lg">
          <span class="">Version 1.7.9</span>
          <span class="">2023</span>
        </div>
        <div class="flex flex-row gap-3 items-center font-semibold text-sm group-first:text-base" style="color:crimson"><div class="h-2 w-2" style="background-color: crimson;"></div><div>3D omgeving</div></div>
        <p class="text-light whitespace-break-spaces">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et 
dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router';
import { onMounted, ref, reactive, watchEffect } from 'vue';

const route = useRoute();
const nuxtApp = useNuxtApp();



const state = reactive({
  results: {},
  errors: [],
  loading: true,
});

const embeddedGameUrl = ref(null);

onMounted(async () => {
  try {
    embeddedGameUrl.value = 'https://api.technoviumunlimited.nl/embeddedgames/' + route.params.id;
  } catch (error) {
    console.error(error);
    state.errors.push(error);
  }
});


</script>
