<template>
  <div class="slide-wrapper">
    <div class="container-fluid">
      <div class="row justify-content-center">
        <div class="progress" style="width: 50%; margin-top: 60px;">
          <div class="progress-bar" role="progressbar" :style="{ width: progressWidth }">{{ progressText }}</div>
        </div>
        <div id="game" style="width: 900px; height: 600px; border: 1px solid #fff" v-show="unityContext">
          <NuxtUnity
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
const route = useRoute()

useProvideNuxtUnity(undefined, (unity) => {
  // eslint-disable-next-line no-console
  console.log(unity)
})
const { NuxtUnity, loaded, SendMessage } = useNuxtUnityOrThrow()
const progressWidth = ref('0%');
const progressText = ref('0%');

const callUnityFunction = () => {
  // scalar or json object are enable as argument
  SendMessage('GameObject', 'HelloMethod', { message: 'hello' })
}
const nuxtApp = useNuxtApp()

const unityConfig = reactive({
  width: '500px',
  height: '500px',
  loaderUrl: '',
  config: {
    dataUrl: '',
    frameworkUrl: '',
    codeUrl: '',
  },
});

const state = reactive({
  results: {},
  errors: [],
  loading: true,
});

const unityContext = ref(null);

onMounted(async () => {
  console.log('onmounted')
  try {
    console.log('try')
    const response = await fetch('https://api.technoviumunlimited.nl/v1/games/' + route.params.id);
    const data = await response.json();
    console.log(data)

    nuxtApp.$nuxtUnityEvent('nuxt-unity:ready').on(({ providerId, unityInstance }) => {
      console.log(providerId, unityInstance);

      progressWidth.value = `${number * 100}%`;

      if (number === 1) {
        progressText.value = '100%';
      }
    });

    state.results = data.game[0];

    unityConfig.width = '500px';
    unityConfig.height = '500px';

    // Check if loaderUrl is provided in the API response before updating it
    if (state.results._loader_js[0]) {
      unityConfig.loaderUrl = state.results._loader_js[0];
    }
    else {
      console.log('no loader')
    }

    unityConfig.loaderUrl = state.results._loader_js[0];
    unityConfig.config.dataUrl = state.results._data_gz[0];
    unityConfig.config.frameworkUrl = state.results._framework_js_gz[0];
    unityConfig.config.codeUrl = state.results._wasm_gz[0];
  } catch (error) {
    console.log(error);
    state.errors.push(error);
  }
});

watch(progressWidth, (width) => {
  progressText.value = width;
});
</script>
