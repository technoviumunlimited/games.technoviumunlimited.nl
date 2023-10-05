<template>
  <div class="slide-wrapper">
    <div class="container-fluid">
      <div class="row justify-content-center">
        <!--
        <div class="progress" style="width: 50%; margin-top: 60px;">
          <div class="progress-bar" role="progressbar" :style="{ width: progressWidth }">{{ progressText }}</div>
        </div>
      -->
        <div id="game" style="width: 900px; height: 600px; border: 1px solid #fff"  >
          <NuxtUnity :unity="unityConfig" v-if="unityConfig"
            :width="unityConfig.width"
            :height="unityConfig.height"
            :unity-loader="unityConfig.loaderUrl"
            :config="unityConfig.config"
            :resizable="true"
            :refresh-delay-time="100"
          ></NuxtUnity>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const route = useRoute();
const nuxtApp = useNuxtApp();

useProvideNuxtUnity(undefined, (unity) => {
  console.log(unity);
});

const { NuxtUnity, loaded, SendMessage } = useNuxtUnityOrThrow();
const progressWidth = ref('0%');
const progressText = ref('0%');

const callUnityFunction = () => {
  // scalar or JSON object is enabled as an argument
  SendMessage('GameObject', 'HelloMethod', { message: 'hello' });
};



const state = reactive({
  results: {},
  errors: [],
  loading: true,
});

let unityContext = ref(undefined);
let unityConfig = ref(undefined);
onMounted(async () => {
  console.log('onmounted');
  try {
    console.log('try');
    const response = await fetch('https://api.technoviumunlimited.nl/v1/games/' + route.params.id);
    state.results = await response.json();
    console.log(state.results);
    unityConfig = reactive({
      width: '500px',
      height: '500px',
      loaderUrl: state.results.game[0]._loader_js[0],
      config: {
        dataUrl: state.results.game[0]._data_gz[0],
        frameworkUrl: state.results.game[0]._framework_js_gz[0],
        codeUrl: state.results.game[0]._wasm_gz[0],
      },
    });

    nuxtApp.$nuxtUnityEvent('nuxt-unity:ready').on(({ providerId, unityInstance }) => {
      console.log(providerId, unityInstance);
      // You can handle progress here
    });

    //state.results = data.game[0];

    // Check if loaderUrl is provided in the API response before updating it
    //if (state.results._loader_js[0]) {
    //  unityConfig.loaderUrl = state.results._loader_js[0];
    //} else {
    //  console.log('no loader');
    //}

    //unityConfig.config.dataUrl = state.results._data_gz[0];
    //unityConfig.config.frameworkUrl = state.results._framework_js_gz[0];
    //unityConfig.config.codeUrl = state.results._wasm_gz[0];
  } catch (error) {
    console.log(error);
    state.errors.push(error);
  }
});

watch(progressWidth, (width) => {
  progressText.value = width;
});
</script>
