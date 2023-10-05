<template>
  <div>
    <BlogCardList :blogcards="cardData" />
  </div>
</template>

<script>

export default {
  data() {
    return {
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
        // Add more cards as needed
      ],
    };
  },
};
</script>