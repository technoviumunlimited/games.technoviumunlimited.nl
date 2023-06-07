<template>
<div class="full-wrap">
  <div class="preloader"></div>
  <div class="backdrop"></div>
  <div class="main-wrapper">
    <div class="header-wrapper">
      <div class="container-fluid">
        <div class="row">
            <div class="col-lg-8 navbar p-0">
                <a href="/" class="logo"><img src="./assets/images/logo.png" alt="logo"></a>
                <button class="navbar-toggler" type="button" data-toggle="collapse"
                    data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul class="navbar-nav nav-menu float-none text-center">
                        <li class="nav-item"><router-link to="/login"  class="nav-link">Season</router-link></li>
                        <li class="nav-item"><a class="nav-link" href="single.html">Single</a></li>
                        <li class="nav-item"><a class="nav-link" href="search.html">Action</a></li>
                        <li class="nav-item"><a class="nav-link" href="video.html">Video</a></li>
                        <li class="nav-item"><a class="nav-link" href="landing.html">Landing</a></li>
                    </ul>
                </div>
            </div>
            <div class="col-lg-4">
                <div class="user-avater">
                    <img src="./assets/images/user-8.png" alt="user">
                    <div class="user-menu">
                        <ul>
                            <li>
                              <router-link to="/account" v-if="isLoggedIn"> Account </router-link>
                              <router-link to="/login" v-else> Login / Register </router-link>
                            </li>
                            
                            <li><a @click="handleSignOut" v-if="isLoggedIn">Sign Out</a></li>
                            <li><a href="profile.html"><i class="ti-user"></i>My Profile</a></li>
                            <li><a href="favorites.html"><i class="ti-heart"></i>My Favorites</a></li>
                            <li><a href="term.html"><i class="ti-world"></i>Privacy Policy</a></li>
                            <li><a href="home.html"><i class="ti-power-off"></i>Log Out</a></li>
                        </ul>
                    </div>
                </div>
                <div class="search-div">
                    <input type="text" placeholder="Seacrh">
                </div>
            </div>
        </div>
    </div>
    </div>
        <router-view></router-view>
        <div class="footer-wrapper">
            <div class="container">
                <div class="row">
                    <div class="col-sm-12 text-left">
                        <h4 class="mb-4">We are digital agency, a small design agency based in paris as i was groping to remove the chain from about my victim’s neck only through language.</h4>
                    </div>
                    <div class="col-sm-6 text-left">
                        <img src="./assets/images/icon-21.png" alt="icon" class="icon-img"> 
                    </div>
                    <div class="col-sm-5 offset-sm-1 text-right">
                        <form action="#" class="mt-0">
                            <input type="text" placeholder="Email">
                            <button>Submit</button>
                        </form>                    
                    </div>
                    <div class="col-sm-12">
                        <div class="middle-footer">
                            <div class="row">
                                <div class="col-md-4 col-lg-2 col-sm-6 col-xs-6 md-mb25">
                                    <h5>Social Link</h5>
                                    <ul>
                                        <li><a href="#">Facebook</a></li>
                                        <li><a href="#">Twitter</a></li>
                                        <li><a href="#">Instagram</a></li>
                                        <li><a href="#">Youtube</a></li>
                                        <li><a href="#">Dribble</a></li>
                                    </ul>
                                </div>
                                <div class="col-md-4 col-lg-2 col-sm-6 col-xs-6 md-mb25">
                                    <h5>ONLINE</h5>
                                    <ul>
                                        <li><a href="#">Web</a></li>
                                        <li><a href="#">Series</a></li>
                                        <li><a href="#">Natak</a></li>
                                        <li><a href="#">Comedy</a></li>
                                        <li><a href="#">Action</a></li>
                                    </ul>
                                </div>
                                <div class="col-md-4 col-lg-2 col-sm-6 col-xs-6 md-mb25">
                                    <h5>Language</h5>
                                    <ul>
                                        <li><a href="#">English</a></li>
                                        <li><a href="#">Spanish</a></li>
                                        <li><a href="#">Arab</a></li>
                                        <li><a href="#">Urdu</a></li>
                                        <li><a href="#">Brazil</a></li>
                                    </ul>
                                </div>
                                <div class="col-md-4 col-lg-2 col-sm-6 col-xs-6">
                                    <h5>Channel</h5>
                                    <ul>
                                        <li><a href="#">Makeup</a></li>
                                        <li><a href="#">Dresses</a></li>
                                        <li><a href="#">Girls</a></li>
                                        <li><a href="#">Sandals</a></li>
                                        <li><a href="#">Headphones</a></li>
                                    </ul>
                                </div>
                                <div class="col-md-4 col-lg-2 col-sm-6 col-xs-6">
                                    <h5>About</h5>
                                    <ul>
                                        <li><a href="#">FAQ</a></li>
                                        <li><a href="#">Term of use</a></li>
                                        <li><a href="#">Privacy Policy</a></li>
                                        <li><a href="#">Feedback</a></li>
                                        <li><a href="#">Careers</a></li>
                                    </ul>
                                </div>
                                <div class="col-md-4 col-lg-2 col-sm-6 col-xs-6">
                                    <h5 class="mb-3">Office</h5>
                                    <p style="width: 100%;">41 madison ave, floor 24 new work, NY 10010 <br>1-877-932-7111</p>
                                    <p style="width: 100%;">41 madison ave, floor 24 new work, NY 10010 <br>1-877-932-7111</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-sm-12 lower-footer"></div>
                    <div class="col-sm-6">
                        <p class="copyright-text">© 2023 copyright. All rights reserved.</p>
                    </div>
                    <div class="col-sm-6 text-right">
                        <p class="float-right copyright-text">In case of any concern, <a href="#">contact us</a></p>
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
    if(user) {
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
