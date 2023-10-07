<template>
  <div>
    <BlogCardListTop :blogcards="cardDataTop" />

    <div class="container mx-auto flex flex-col gap-8 mt-12 md:mt-24">
      <h2 class="font-black text-3xl md:text-5xl">Browse Topics</h2>
      <div class="flex flex-col md:flex-row gap-8 md:gap-24">
        <Categories :categories="categories" />
        <div class="flex-1 basis-full flex flex-col items-center gap-8">
          <BlogCardList :blogcards="cardData" />
          <button class="flex flex-row items-center justify-center gap-3 h-8 w-28 lg:h-12 lg:w-36 border-2 border-bgbuttonprimary text-bgbuttonprimary hover:border-primary hover:text-primary rounded-lg uppercase">Load more</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      categories: [
        {
          id: '1',
          name: 'Mediavormgeving',
        },
        {
          id: '2',
          name: 'Creatieve Technologie',
        },
        {
          id: '3',
          name: 'Software Development',
        },
        {
          id: '4',
          name: 'Technovium Unlimited',
        },
      ],
      cardDataTop: [
        {
          name: '3D omgeving',
          src: 'https://cdn.discordapp.com/attachments/644184902484623360/1151091528488472667/image.png',
          link: '/blogs/1',
          description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet",
          category: '3D omgeving',
          color: '#EC2165',
          date: '31-09-2023',
        },
        {
          name: 'Technovium Unlimited',
          src: 'https://cdn.discordapp.com/attachments/644184902484623360/1151091528488472667/image.png',
          link: '/blogs/2',
          description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet",
          category: '3D omgeving',
          color: '#21AAEC',
          date: '31-09-2023',
        },
        {
          name: 'Technovium Unlimited',
          src: 'https://cdn.discordapp.com/attachments/644184902484623360/1151091528488472667/image.png',
          link: '/blogs/3',
          description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet",
          category: '3D omgeving',
          color: '#21AAEC',
          date: '31-09-2023',
        },
        {
          name: 'Technovium Unlimited',
          src: 'https://cdn.discordapp.com/attachments/644184902484623360/1151091528488472667/image.png',
          link: '/blogs/4',
          description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet",
          category: '3D omgeving',
          color: '#21AAEC',
          date: '31-09-2023',
        },
      ],
      cardData: [
        {
          name: '3D omgeving',
          src: 'https://cdn.discordapp.com/attachments/644184902484623360/1151091528488472667/image.png',
          link: '/blogs/1',
          description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet",
          category: '3D omgeving',
          color: '#EC2165',
          date: '31-09-2023',
        },
        {
          name: 'Technovium Unlimited',
          src: 'https://cdn.discordapp.com/attachments/644184902484623360/1151091528488472667/image.png',
          link: '/blogs/2',
          description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet",
          category: '3D omgeving',
          color: '#21AAEC',
          date: '31-09-2023',
        },
        {
          name: 'Technovium Unlimited',
          src: 'https://cdn.discordapp.com/attachments/644184902484623360/1151091528488472667/image.png',
          link: '/blogs/3',
          description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet",
          category: '3D omgeving',
          color: '#21AAEC',
          date: '31-09-2023',
        },
        {
          name: 'Technovium Unlimited',
          src: 'https://cdn.discordapp.com/attachments/644184902484623360/1151091528488472667/image.png',
          link: '/blogs/4',
          description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet",
          category: '3D omgeving',
          color: '#21AAEC',
          date: '31-09-2023',
        },
        {
          name: 'Technovium Unlimited',
          src: 'https://cdn.discordapp.com/attachments/644184902484623360/1151091528488472667/image.png',
          link: '/blogs/5',
          description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet",
          category: '3D omgeving',
          color: '#21AAEC',
          date: '31-09-2023',
        },
        {
          name: 'Technovium Unlimited',
          src: 'https://cdn.discordapp.com/attachments/644184902484623360/1151091528488472667/image.png',
          link: '/blogs/6',
          description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet",
          category: '3D omgeving',
          color: '#21AAEC',
          date: '31-09-2023',
        },
        {
          name: 'Technovium Unlimited',
          src: 'https://cdn.discordapp.com/attachments/644184902484623360/1151091528488472667/image.png',
          link: '/blogs/7',
          description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet",
          category: '3D omgeving',
          color: '#21AAEC',
          date: '31-09-2023',
        },
        {
          name: 'Technovium Unlimited',
          src: 'https://cdn.discordapp.com/attachments/644184902484623360/1151091528488472667/image.png',
          link: '/blogs/8',
          description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet",
          category: '3D omgeving',
          color: '#21AAEC',
          date: '31-09-2023',
        },
        {
          name: 'Technovium Unlimited',
          src: 'https://cdn.discordapp.com/attachments/644184902484623360/1151091528488472667/image.png',
          link: '/blogs/9',
          description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet",
          category: '3D omgeving',
          color: '#21AAEC',
          date: '31-09-2023',
        },
        {
          name: 'Technovium Unlimited',
          src: 'https://cdn.discordapp.com/attachments/644184902484623360/1151091528488472667/image.png',
          link: '/blogs/9',
          description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet",
          category: '3D omgeving',
          color: '#21AAEC',
          date: '31-09-2023',
        },
        // Add more cards as needed
      ],
    };
  },
};
</script>