<template>
    <div class="slide-wrapper">
      <div class="container-fluid">
        <div class="row justify-content-center">
          <div class="progress" style="width: 50%; margin-top: 60px;">
            <div class="progress-bar" role="progressbar" style="width: 0%;" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">0%</div>
          </div>
          <div id="game" style="width: 900px; height: 600px; border: 1px solid #fff">
            <UnityVue :unity="unityContext" v-if="unityContext" />
            <a @click="onFullscreen" class="btn float-right">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-fullscreen" viewBox="0 0 16 16">
                <path d="M1.5 1a.5.5 0 0 0-.5.5v4a.5.5 0 0 1-1 0v-4A1.5 1.5 0 0 1 1.5 0h4a.5.5 0 0 1 0 1h-4zM10 .5a.5.5 0 0 1 .5-.5h4A1.5 1.5 0 0 1 16 1.5v4a.5.5 0 0 1-1 0v-4a.5.5 0 0 0-.5-.5h-4a.5.5 0 0 1-.5-.5zM.5 10a.5.5 0 0 1 .5.5v4a.5.5 0 0 0 .5.5h4a.5.5 0 0 1 0 1h-4A1.5 1.5 0 0 1 0 14.5v-4a.5.5 0 0 1 .5-.5zm15 0a.5.5 0 0 1 .5.5v4a1.5 1.5 0 0 1-1.5 1.5h-4a.5.5 0 0 1 0-1h4a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 1 .5-.5z"/>
              </svg>
            </a>
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
        //dummyString = dummyString.split(':')[0]
  
        if (number === 1) {
          $('.progress').hide();
          $('#game').show();
        } else {
          $('#game').hide();
        }
      });

      unityContext.value.on('created', () => {
        console.log('Unity Instance: created.');
        userInfo();
      })

      /*
      unityContext.value.on('userInfo', (data) => {
        console.log(data)
        //$('#dialog').show()
      })
      // you also can call function.
      unityContext.value.emit('userInfo', data);
      */  
    } catch (error) {
      state.errors.push(error);
    }
  });
  const userInfo = () => {
    console.log('inside userinfo');
    unityContext.value.send('TechnoviumUnlimitedUser', 'getTechnoviumUnlimitedUser', 
        "JWT:"+ getCookie("jwt") + ";Email:" + getCookie("email") + ";UserId:" + getCookie("user_id") +";"
    );
    console.log(getCookie("jwt"));
    console.log('after userinfo');
  }
  const onFullscreen = () => {
    unityContext.value.setFullscreen(true)
  };

  function getCookie(cname) {
    let name = cname + "=";
    let ca = document.cookie.split(';');
    for(let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }


  
  </script>
  