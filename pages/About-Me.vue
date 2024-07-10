<template>
<div class="w-full text-white px-32 py-8 flex flex-col gap-8 items-center justify-center ">

      <div class=" border-2 w-[50rem] w-full flex flex-col p-4 gap-2 rounded-xl shadow-2xl">
        <h2 class="text-2xl">
            Hello, I'm <span class="text-red-600 font-semibold">Sophie</span>
         </h2>
         <span class="text-lg">Mathemagician/PhD student/cat lover</span>
         <span>
            I graduated from the University of Edinburgh with an MMath 1st class this summer -- where an MMath is a 5 year
            integrated masters in mathematics. Going forward, I will be supervised by Prof Antony Maciocia in a
            PhD at the University of Edinburgh, looking at algebraic geometry and category theory.

            I've been involved in a few cool maths things, such as the Matt Parker Pi Day in 2021 and 2023, and one of the
            TMiP clopen mic nights, and would love to get involved in some more if I have the time for it! As it is, in my
            spare time I enjoy ballroom and tap dancing and choral singing, as well as designing celtic knots.
         </span>
         <NuxtLink 
            to="/writing" 
            class="mt-4 w-36 flex justify-center items-center bg-red-700 text-white rounded-2xl px-4 py-2 text-slate-900 
            font-semibold hover:bg-green-400 transition-colors duration-200 ease-in-out">
            See my papers
         </NuxtLink>
      </div>
      <Timeline />
      

   </div>

</template>

<script setup>
</script>

<style scoped>
/* Add any scoped styles for the Navbar component here */
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