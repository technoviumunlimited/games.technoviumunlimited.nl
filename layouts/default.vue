<script setup>
  const sidenavActive = ref(0);

  function toggleClicked() {
    sidenavActive.value = sidenavActive.value === 1 ? 0 : 1;
  }
</script>
<template>
  <div>
    <Header @clicked="toggleClicked"/>
    <SideNav :sidenavActive="sidenavActive" @clicked="toggleClicked" :key="sidenavActive"/>
    <slot />
    <Footer />
  </div>
</template>