<template>
  <div class="blue-gradient h-screen">
    <Navbar />
    <div class="h-96 items-center text-white flex justify-center w-full text-4xl">Hi, I'm Sophie</div>
  </div>
</template>

<script setup>
import Navbar from '~/components/Navbar.vue';
</script>

<style scoped>
.blue-gradient {
  background-image: linear-gradient(0deg,
    hsl(221deg 91% 9%) 0%,
    hsl(221deg 89% 10%) 9%,
    hsl(219deg 86% 12%) 18%,
    hsl(218deg 85% 13%) 27%,
    hsl(216deg 83% 14%) 36%,
    hsl(216deg 80% 16%) 45%,
    hsl(214deg 79% 17%) 55%,
    hsl(213deg 76% 18%) 64%,
    hsl(211deg 74% 19%) 73%,
    hsl(210deg 72% 21%) 82%,
    hsl(209deg 70% 22%) 91%,
    hsl(207deg 68% 23%) 100%);
}
</style>
