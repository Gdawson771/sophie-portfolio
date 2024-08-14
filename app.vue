<template>
  <div class="bg-[#111010] h-full min-h-screen">
    <Navbar />
    <NuxtPage />
  </div>
</template>

<script>
import Navbar from '~/components/Navbar.vue';

export default {
  head() {
    return {
      title: 'Sophie Bleau | PhD Student in Algebraic Geometry and Quantum Physics | University of Edinburgh',
      meta: [
        { hid: 'description', name: 'description', content: 'Explore the research portfolio of Sophie Bleau, PhD student at the University of Edinburgh. Featuring publications on Algebraic Geometry, Quantum Physics, and more. Discover insights into mirror maps, Coxeter groups, and other advanced topics discussed in key papers supervised by leading academics.' }
      ]
    }
  }
}

</script>

<style scoped>
</style>
