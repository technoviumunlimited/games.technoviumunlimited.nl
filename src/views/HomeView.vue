<template>
    <div class="banner-wrapper">
        <div class="container-fluid">
            <div class="row">
                <div class="col-sm-12">
                    <div class="banner-wrap justify-content-between align-items-center">
                        <div class="left-wrap">
                            <h2>Technovium <br> Unlimited</h2>
                            <span class="tag"><b>VERSION 1.7.9</b></span>
                            <span class="tag">2023</span>
                            <span class="tag"><b>Top MBO Opleidingen</b></span>
                            <p>Educatieve 3D omgevingen en spellen, gemaakt door ROC studenten en docenten.</p>
                            <router-link :to="'/game/bf2q1Mv7iN1Reln17pf9'" class="btn btn-lg"><img src="../assets/images/play.png" alt="icn">Play</router-link>
                            <router-link :to="'/game/bf2q1Mv7iN1Reln17pf9'" class="icon-bttn"><i class="ti-plus text-white"></i></router-link>
                            <div class="icon-bttn">
                                <i class="ti-sharethis text-white mr-4"></i>
                                <div class="share-icons">
                                    <a href="#"><i class="ti-facebook"></i></a>
                                    <a href="#"><i class="ti-twitter-alt"></i></a>
                                    <a href="#"><i class="mr-0 ti-pinterest"></i></a>
                                </div>
                            </div>

                        </div>
                        <div class="right-wrap">
                            <video autoplay muted loop id="myVideo">
                                <source src="../assets/images/play.mp4" type="video/mp4">
                            </video>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="slide-wrapper">
        <div class="container-fluid">
            <div class="row">
                <div class="col-sm-6 text-left mb-4 mt-4">
                    <h2>Meer 3D omgevingen door studenten en docenten gemaakt</h2>
                </div>
            </div>
            <div class="row text-center" v-if="state.loading">        
                <div class="col-sm ">
                    <div class="slide-slider owl-carousel owl-theme">
                        <div class="owl-items">
                            <div class="slide-image">
                                <div class="spinner-border text-secondary" style="width: 6rem; height: 6rem;" role="status">
                                    <span class="sr-only">Loading...</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <!--<div class="preloader"></div>-->
                </div>
            </div>
            <div class="row" v-else >        
                <div class="col-sm" v-for="(game, index) of state.allGames" :key="index">
                    <div class="slide-slider owl-carousel owl-theme">
                        <div class="owl-items">
                            <router-link  :to="'/game/' + game._id" class="slide-one" >
                                <div class="slide-image"><img v-bind:src="game._thumb" alt="image"></div>
                                <div class="slide-content">
                                    <h2>{{ game.name }}</h2>
                                    <span class="tag">Auteurs: <b>{{ game.created_by }}</b></span>
                                </div>
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>
        
            <div v-if="state.errors && state.errors.length">
                <div v-for="(error, index) of state.errors" :key="index">
                    {{error.message}}
                </div>
            </div>
        </div>
    </div>
    <!--
    <div class="slide-wrapper">
        <div class="container-fluid">
            <div class="row">
                <div class="col-sm-6 text-left mb-4 mt-4">
                    <h2>The Crew</h2>
                </div>
            </div>
            <div class="row">
                <div class="col-sm">
                    <div class="team-slider-full owl-carousel owl-theme">
                        <div class="owl-items"><a href="#" class="crew-wrap"><img src="../assets/images/team1.jpg" alt="team"><span>David Wenham</span></a></div>
                        
                    </div>
                </div>
                <div class="col-sm">
                    <div class="team-slider-full owl-carousel owl-theme">
                        <div class="owl-items"><a href="#" class="crew-wrap"><img src="../assets/images/team1.jpg" alt="team"><span>David Wenham</span></a></div>
                        
                    </div>
                </div>
                <div class="col-sm">
                    <div class="team-slider-full owl-carousel owl-theme">
                        <div class="owl-items"><a href="#" class="crew-wrap"><img src="../assets/images/team1.jpg" alt="team"><span>David Wenham</span></a></div>
                        
                    </div>
                </div>
                
            </div>
        </div>
    </div>-->
</template>

<script setup>
import axios from 'axios';
import { onMounted, reactive } from 'vue'

const state = reactive({
    loading :  true,
    allGames : {},
    errors : [],
})

onMounted( async () => {
    await getAllGames();
});

function getAllGames(){
    axios.get('https://api.technoviumunlimited.nl/v1/games')
    .then(res => {
        state.allGames  = res.data.games;
        state.loading   = false;
        console.log(state.allGames);
    })
    .catch((e) => {
        state.errors.push(e);
    });
}

</script>