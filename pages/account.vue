<template>
    <div class="mb-24">hi, hier komt nog volledige pagina</div>
</template>

<script setup>
onMounted(async () => {
  try {
    //const firebaseUser = useFirebaseUser();
    //console.log(firebaseUser);
    definePageMeta({
        middleware:['auth']
    });  
  } catch (error) {
    console.error(error);
    state.errors.push(error);
  }
});
   
</script>