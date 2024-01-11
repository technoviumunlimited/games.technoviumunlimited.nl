<template>
  <div class="container mx-auto mt-12 md:mt-24">
    <div class="flex flex-row gap-8 flex-wrap">
      <div class="flex-1 w-fit basis-2/3 bg-bgsecondary rounded-lg shadow-md flex flex-col overflow-hidden h-fit">
        <div class="w-full aspect-w-16 aspect-h-9"  >
          <iframe class="w-full h-full" id="game" v-if="embeddedGameUrl"
            :src="embeddedGameUrl"
            frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen
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
    embeddedGameUrl.value = 'https://api.technoviumunlimited.nl/embeddedgames/' + route.params.id;
    setMetaTags();
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
    iframe.contentWindow.postMessage('SetFullscreen', 'https://api.technoviumunlimited.nl/embeddedgames/' + route.params.id);
  }
}

const setMetaTags = () => {
  if (data) {
    console.log(data._value.game[0].name)
    const title = `Game - ${data._value.game[0].name}`;
    const description = data._value.game[0].description;

    // Set meta tags dynamically for this game page
    document.title = title;

    const metaTags = [
      { hid: 'description', name: 'description', content: description },
      // Other meta tags specific to this game page if needed
    ];

    // Remove existing meta tags from the document
    document.querySelectorAll('meta[data-n-head="1"]').forEach(tag => tag.remove());

    // Add new meta tags to the document head
    metaTags.forEach(tag => {
      const meta = document.createElement('meta');
      Object.keys(tag).forEach(key => {
        meta.setAttribute(key, tag[key]);
      });
      document.head.appendChild(meta);
    });
  }
};
</script>


