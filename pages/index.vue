<template>
  <div>
    <Banner />
    <div class="container mx-auto pt-8 lg:pt-16 font-black text-3xl uppercase">Meer projecten</div>
    <div class="container mx-auto uppercase font-bold text-light">door studenten en docenten gemaakt</div>
    <CardList :cards="cardData" />
  </div>
</template>

<script>
import Banner from '~/components/Banner.vue';
import CardList from '~/components/CardList.vue';

export default {
  components: {
    Banner,
    CardList,
  },
  data() {
    return {
      cardData: [
        {
          name: 'Technovium Unlimited',
          src: 'https://cdn.discordapp.com/attachments/644184902484623360/1151091528488472667/image.png',
          link: '/card1',
          authors: ['Author 1', 'Author 2', 'Author 3'],
        },
        {
          name: 'Omgeving Technovium',
          src: 'https://cdn.discordapp.com/attachments/644184902484623360/1151778109788540938/image.png',
          link: '/card2',
          authors: ['Author 3'],
        },
        {
          name: 'Omgeving Technovium',
          src: 'https://cdn.discordapp.com/attachments/644184902484623360/1151778109788540938/image.png',
          link: '/card2',
          authors: ['Author 3'],
        },
        {
          name: 'Omgeving Technovium',
          src: 'https://cdn.discordapp.com/attachments/644184902484623360/1151778109788540938/image.png',
          link: '/card2',
          authors: ['Author 3'],
        },
        {
          name: 'Omgeving Technovium',
          src: 'https://cdn.discordapp.com/attachments/644184902484623360/1151778109788540938/image.png',
          link: '/card2',
          authors: ['Author 3'],
        },
        {
          name: 'Omgeving Technovium',
          src: 'https://cdn.discordapp.com/attachments/644184902484623360/1151778109788540938/image.png',
          link: '/card2',
          authors: ['Author 3'],
        },
        {
          name: 'Omgeving Technovium',
          src: 'https://cdn.discordapp.com/attachments/644184902484623360/1151778109788540938/image.png',
          link: '/card2',
          authors: ['Author 3'],
        },
        {
          name: 'Omgeving Technovium',
          src: 'https://cdn.discordapp.com/attachments/644184902484623360/1151778109788540938/image.png',
          link: '/card2',
          authors: ['Author 3'],
        },
        // Add more cards as needed
      ],
    };
  },
};
</script>
