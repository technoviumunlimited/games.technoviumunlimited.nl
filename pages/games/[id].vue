<template>
  <div class="container mx-auto mt-12 md:mt-24">
    <div class="flex flex-row gap-8 flex-wrap">
      <div class="flex-1 w-fit basis-2/3 bg-bgsecondary rounded-lg shadow-md flex flex-col overflow-hidden h-fit">
        <div class="w-full aspect-w-16 aspect-h-9"  >
          <iframe class="w-full h-full" id="game" v-if="embeddedGameUrl"
            :src="embeddedGameUrl"
            frameborder="0" allowfullscreen
          ></iframe>
        </div>
        <div class="w-full flex justify-between items-center text-3xl">
          <div class="h-16 flex flex-row">
            <div class="w-24 bg-primary"></div>
            <div class="w-24 bg-primary" style="clip-path: polygon(0 0, 0% 100%, 100% 100%);"></div>
          </div>
          <button @click="setFullScreen"><i class="fa-solid fa-expand px-6"></i></button>
        </div>
      </div>
      <div class="flex-1 basis-96 bg-bgsecondary rounded-lg shadow-md flex flex-col gap-3 p-8">
        <h1 class="font-black text-3xl">{{ data.game[0].name }}</h1>
        <div class="flex flex-row items-center gap-5 font-black text-light text-lg">
        </div>
        <div v-for="category in data.game[0].category" class="flex flex-row gap-3 items-center font-semibold text-sm group-first:text-base" v-bind:style="{color: category.color}">
                    <div class="h-2 w-2" v-bind:style="{backgroundColor: category.color}"></div>
                    <div>{{ category.name }}</div>
                </div>
        <div class="text-light whitespace-break-spaces" v-html=data.game[0].description></div>
      </div>
    </div>
  </div>
</template>

<script setup>
const route = useRoute();

const { data, error, pending, refresh } = await useFetch(`https://api.technoviumunlimited.nl/v1/games/` + route.params.id);
console.log(data);

const state = reactive({
  results: {},
  errors: [],
  loading: true,
});

function setFullScreen () {
  const iframe = document.getElementById('game');
  iframe.requestFullscreen();
}

const embeddedGameUrl = ref(null);

onMounted(async () => {
  try {
    embeddedGameUrl.value = 'https://api.technoviumunlimited.nl/games/' + route.params.id +'/';
  } catch (error) {
    console.error(error);
    state.errors.push(error);
  }
});

const sendMessageToIframe = () => {
  // Get a reference to the iframe element
  const iframe = document.getElementById('game');
 

  if (iframe) {
    // Send a message to the iframe
    iframe.contentWindow.postMessage('SetFullscreen', 'https://api.technoviumunlimited.nl/games/' + route.params.id);
  }
}
</script>
