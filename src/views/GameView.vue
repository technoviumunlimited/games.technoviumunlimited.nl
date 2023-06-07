<template>
    <div class="slide-wrapper">
      <div class="container-fluid">
        <div class="row justify-content-center">
          <div class="progress" style="width: 50%; margin-top: 60px;">
            <div class="progress-bar" role="progressbar" style="width: 0%;" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">0%</div>
          </div>
          <div id="game" style="width: 900px; height: 600px; border: 1px solid #fff">
            <UnityVue :unity="unityContext" v-if="unityContext" />
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { useRoute } from "vue-router";
  import { onBeforeMount, reactive, ref } from 'vue';
  import UnityWebgl from 'unity-webgl';
  import UnityVue from 'unity-webgl/vue';
  import $ from 'jquery';
  
  const state = reactive({
    results: {},
    errors: [],
    loading: false,
  });
  
  const unityContext = ref(null);
  const route = useRoute();
  
  onBeforeMount(async () => {
    try {
      const response = await fetch('https://api.technoviumunlimited.nl/v1/games/' + route.params.id);
      const data = await response.json();
      state.results = data.game;
  
      unityContext.value = new UnityWebgl({
        loaderUrl: data.game[0]._loader_js[0],
        dataUrl: data.game[0]._data_gz[0],
        frameworkUrl: data.game[0]._framework_js_gz[0],
        codeUrl: data.game[0]._wasm_gz[0],
      });
  
      unityContext.value.on('progress', (number) => {
        $(".progress-bar").css("width", (number * 100) + "%").text((number * 100) + "%");
  
        if (number === 1) {
          $('.progress').hide();
          $('#game').show();
        } else {
          $('#game').hide();
        }
  
        console.log("progress:" + number);
      });
    } catch (error) {
      state.errors.push(error);
    }
  });
  </script>
  