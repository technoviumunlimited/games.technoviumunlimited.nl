<template>
  <div class="slide-wrapper">
    <div class="container-fluid">
      <div class="row justify-content-center">

        <div id="game" style="width: 960px; height: 600px; border: 1px solid #fff"  >
          <iframe  v-if="embeddedGameUrl"
            width="100%"
            height="600"
            :src="embeddedGameUrl"
            frameborder="0"
            allowfullscreen
          ></iframe>
        </div>
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
