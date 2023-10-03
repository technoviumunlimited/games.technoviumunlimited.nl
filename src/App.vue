<template>
<div class="full-wrap">
  <div class="preloader"></div>
  <div class="backdrop"></div>
  <div class="main-wrapper">
    <div class="header-wrapper">
      <div class="container-fluid">
        <div class="row">
            <div class="col-lg-8 navbar p-0">       
                <router-link to="/" class="logo"><img src="./assets/images/logo.png" alt="logo"></router-link>
                <button class="navbar-toggler" type="button" data-toggle="collapse"
                    data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul class="navbar-nav nav-menu float-none text-center">
                        <li class="nav-item"><router-link to="/" class="nav-link" >Home</router-link></li>
                        <li class="nav-item"><a class="nav-link" href="http://static.technoviumunlimited.nl/wat-is-technovium-unlimited">Wat is Technovium Unlimited</a></li>
                    </ul>
                </div>
            </div>
            <div class="col-lg-4">
                <div class="user-avater" v-if="isLoggedIn">
                    <img src="./assets/images/user-8.png" alt="user">
                    <div class="user-menu">
                        <ul>
                            <li>
                              <router-link to="/account">My Profile</router-link>
                            </li>
                            <li>
                                <a href="#" @click="handleSignOut" v-if="isLoggedIn"><i class="ti-user"></i>Sign Out</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div v-else class="user-avater">
                    <img src="./assets/images/user-8.png" alt="user">
                    <div class="user-menu">
                        <ul>
                            <li>
                                <router-link to="/register">Register </router-link>
                            </li>
                            <li>
                                <router-link to="/login">Login </router-link>
                            </li>
                        </ul>
                    </div>
                </div>
                <!--
                <div class="search-div">
                    <input type="text" placeholder="Seacrh">
                </div>
                -->
            </div>
        </div>
    </div>
    </div>
        <router-view></router-view>
        <div class="footer-wrapper">
            <div class="container">
                <div class="row">
                    <div class="col-sm-12 text-left">
                        <h4 class="mb-4">Met Technovium Unlimited wordt gestreefd een levende online leeromgeving te creëren, ontwikkeld door studenten en docenten.</h4>
                        <p></p>
                    </div>
                    
                    

                    <div class="col-sm-12 lower-footer"></div>
                    <div class="col-sm-6">
                        <p class="copyright-text">© 2023 copyright. All rights reserved.</p>
                    </div>
                    <div class="col-sm-6 text-right">
                        <p class="float-right copyright-text">In case of any concern, <a href="mailto:b.dewildt@roc-nijmegen.nl,d.radic@roc-nijmegen.nl">contact us</a></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script setup>
import $ from "jquery";
//https://codepen.io/cb2307/pen/XYxyeY
import { onMounted, ref } from 'vue';
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import router from './router';
//import './assets/js/scripts.js';
const isLoggedIn = ref(false);

let auth;
onMounted(() => {    
  auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    console.log("onAuthStateChanged")
    console.log(user);
    if(user) {
        document.cookie = "jwt="+ user.accessToken +";"
        document.cookie = "user_id="+ user.uid +";"
        document.cookie = "email="+ user.email +";"
        isLoggedIn.value = true;
    } else {
        isLoggedIn.value = false;
    }
  })
    $('.preloader').hide();
});

const handleSignOut = () => {
  signOut(auth).then(() => {
    router.push("/");
  });
}

</script>
