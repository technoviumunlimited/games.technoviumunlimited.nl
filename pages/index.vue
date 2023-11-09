<script setup>
  const { data, error, pending, refresh } = await useFetch(`https://api.technoviumunlimited.nl/v1/games`);
</script>

<template>
  <div>
    <Banner />
    <div class="container mx-auto mt-24 font-black text-3xl uppercase">Meer projecten</div>
    <div class="container mx-auto uppercase font-bold text-light">door studenten en docenten gemaakt</div>
    <CardList :cards="data.games" />
    <About />
  </div>
</template>