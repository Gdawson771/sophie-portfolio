<template>
    <div class="w-full flex-col justify-center items-center">
        <h1 class="w-full flex justify-center text-2xl text-white">My Papers</h1>
        <PdfOptions />
    </div>
</template>
 
 <script setup>
import PdfOptions from '../components/PdfOptions.vue';

 </script>
 
 <style scoped>
 .blue-gradient-reverse {
  background-image: linear-gradient(180deg,
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