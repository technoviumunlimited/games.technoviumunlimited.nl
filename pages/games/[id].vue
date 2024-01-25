<template>
  <div class="container mx-auto mt-12 md:mt-24">
    <div class="grid grid-cols-12 grid-rows-auto gap-8 flex-wrap" id="gridContainer">
      <div class="col-span-12 lg:col-span-8 row-span-1 bg-bgsecondary rounded-lg shadow-md flex flex-col overflow-hidden h-fit" id="gameContainer">
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
      <div class="col-span-12 lg:col-span-4 grid grid-rows-auto bg-bgsecondary rounded-lg shadow-md gap-3 p-8 overflow-hidden">
        <h1 class="flex-1 font-black text-3xl">{{ data.game[0].name }}</h1>
        <div class="flex-1 flex flex-row items-center gap-5 font-black text-light text-lg">
        </div>
        <div v-for="category in data.game[0].category" class="flex-1 flex flex-row gap-3 items-center font-semibold text-sm group-first:text-base" v-bind:style="{color: category.color}">
                    <div class="h-2 w-2" v-bind:style="{backgroundColor: category.color}"></div>
                    <div>{{ category.name }}</div>
                </div>
        <div class="flex-1 text-light whitespace-break-spaces overflow-hidden" v-html=data.game[0].description></div>
      </div>
    </div>
    <ul class="text-sm font-medium text-center text-gray-500 rounded-lg shadow grid grid-cols-2 md:grid-cols-6 xl:grid-cols-12 gap-3 mt-24 bg-footer">
        <li @click="selectTab('Description')" :class="{ 'active': selectedTab === 'Description' }" class="group col-span-2">
            <a class="flex flex-col gap-3 py-4 col-span-3 items-center justify-center rounded-lg group-[.active]:bg-bgsecondary text-lg font-bold">
              <i class="fa-solid fa-file-lines text-5xl"></i>
              <span>Description</span>
            </a>
        </li>
        <li @click="selectTab('Collaborators')" :class="{ 'active': selectedTab === 'Collaborators' }" class="group col-span-2">
            <a class="flex flex-col gap-3 py-4 items-center justify-center rounded-lg group-[.active]:bg-bgsecondary text-lg font-bold">
              <i class="fa-solid fa-users text-5xl"></i>
              <span>Collaborators</span>
            </a>
        </li>
    </ul>
    <div :class="{ 'hidden': selectedTab !== 'Description' }" class="bg-bgsecondary rounded-lg shadow-md gap-3 p-8 overflow-hidden mt-6" v-html=data.game[0].description></div>
    <div :class="{ 'hidden': selectedTab !== 'Collaborators' }" class="bg-bgsecondary rounded-lg shadow-md gap-3 p-8 overflow-hidden mt-6">
      <HallOfFameCardList :cards="people"/>
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

<script>
export default {
  data() {
  return {
    selectedTab: 'Description',

    // Replace with real data
    people: [
      { id: 1, logo: '/path/to/logo1.png', name: 'Juul van Tilburg', position: 'Frontend Developer', role: 'Frontenders' },
      { id: 2, logo: '/path/to/logo2.png', name: 'Iris Reijnen', position: 'Backend Developer', role: 'Backenders' },
      { id: 3, logo: '/path/to/logo2.png', name: 'Davor Radic', position: 'Product Owner', role: 'Backenders' },
    ],
  };
},
  mounted() {
    this.updateRowHeight();

    // Add a resize event listener to adjust the row height on screen resize
    window.addEventListener("resize", this.updateRowHeight);
  },
  methods: {
    updateRowHeight() {
      // Get the height of the first item and apply it to the other items
      const firstItem = document.getElementById("gameContainer");
      const gridContainer = document.getElementById("gridContainer");

      if (firstItem && gridContainer) {
        const height = window.getComputedStyle(firstItem).height;
        gridContainer.style.gridAutoRows = height;
      }
    },
    selectTab(tab) {
      this.selectedTab = tab;
    },
  },
  beforeDestroy() {
    // Remove the resize event listener to prevent memory leaks
    window.removeEventListener("resize", this.updateRowHeight);
  },
};
</script>


