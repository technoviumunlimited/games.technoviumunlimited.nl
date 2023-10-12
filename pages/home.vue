<template>
    <div>
        <div class="banner-wrapper">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-sm-12">
                        <div class="banner-wrap justify-content-between align-items-center">
                            <div class="left-wrap">
                                <h2>Technovium <br> Unlimited</h2>
                                <span class="tag"><b>VERSION 1.7.9</b></span>
                                <span class="tag">2023</span>
                                <span class="tag"><b>Top Opleidingen</b></span>
                                <p>Bas verzient hier wat tekst!!!!!!</p>
                                <a href="" class="btn btn-lg"><img src="~/assets/images/play.png" alt="icn">Play</a>
                                <a href="#" class="icon-bttn"><i class="ti-plus text-white"></i></a>
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
                                <!--<source src="images/video1.mp4" type="video/mp4">-->
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
                        <h2>Meer spellen door studenten en docenten gemaakt</h2>
                    </div>
                </div>
                <div class="row" v-if="state.loading">        
                    <div class="col-sm">
                        <!--<div class="preloader"></div>-->
                    </div>
                </div>
                <div class="row" v-else >        
                    <div class="col-sm" v-for="(game, index) of state.allGames" :key="index">
                        <div class="slide-slider owl-carousel owl-theme">
                            <div class="owl-items">
                                <nuxt-link  :to="'/game/' + game._id" class="slide-one" >
                                    <div class="slide-image"><img src="https://placehold.co/250x150/png" alt="image"></div>
                                    <div class="slide-content">
                                        <h2>{{ game.name }}</h2>
                                        <span class="tag">autheurs: <b>{{ game.created_by }}</b></span><br/>
                                        <span class="tag">Opleiding: <b>{{ game.category }}</b></span>
                                    </div>
                                </nuxt-link>
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
                    <div class="col-sm">
                        <div class="team-slider-full owl-carousel owl-theme">
                            <div class="owl-items"><a href="#" class="crew-wrap"><img src="../assets/images/team1.jpg" alt="team"><span>David Wenham</span></a></div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  async asyncData({ params }) {
    try {
      const response = await this.$axios.get('https://api.technoviumunlimited.nl/v1/games');
      const allGames = response.data.games;
      return { allGames, loading: false };
    } catch (error) {
      return { errors: [error] };
    }
  },
  head() {
    return {
      title: 'Technovium Unlimited',
      meta: [
        { hid: 'description', name: 'description', content: 'Your description here' },
        // Add more meta tags as needed
      ],
    };
  },
};
</script>