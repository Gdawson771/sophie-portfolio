<template>
   <div class="text-white p-4 w-full lg:w-2/3 xl:w-[45rem] flex flex-col gap-2">
    <span class="text-xl font-semibold">
      My Papers
    </span>
    <span>
      Over the course of my mathematical journey, I've had the pleasure of working with some brilliant mathematicians, 
      exploring exciting areas of mathematics. For the curious among you, feel free to dive into the papers below and sate your hunger for 
      math. A love for algebraic geometry is not required, but you will end up with one after these papers!
    </span>
  </div>
  <div class="w-full flex-col gap-8 flex break-words w-full flex min-h-screen items-center justify-center pb-40">
    <div v-for="document in firstRowDocuments" class="p-4 text-white w-full lg:w-2/3 xl:w-[45rem] flex flex-col gap-4">
       <div>
        <h3 class="text-lg font-semibold">
          {{document.title}}
        </h3>
        <h5 class="font-light text-sm text-gray-300 pb-3">{{ document.date }}</h5>
        <span class="text-gray-200">
          {{document.summary}}
        </span> 
      </div>
      <div @click="handleDocumentClick(document.src)" class="hover:bg-stone-800 !px-3 !py-4 nuxt-link flex text-white w-full items-center justify-between cursor-pointer flex w-full items-center justify-between rounded border border-neutral-200 border-neutral-700 bg-neutral-800 cursor-pointer">
        Read Full Paper
        <NuxtImg src="/images/arrow-right-solid.svg" alt="Empty Cart Image" class="squint-icon !w-4 text-white"/>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const firstRowDocuments = ref([
{
    title: "Positivity and Integrality of Mirror Maps",
    date: "May 2024",
    src: "The_positivity_and_integrality_of_mirror_maps",
    summary: "This paper explores the application of mirror maps to reflexive polytopes in Algebraic Geometry and Quantum Physics, revealing that these maps generate power series with integer coefficients, and examines a variant map producing series with positive integers, a surprising result given their polynomial rational coefficient origins."
},
  { 
    title: 'Discrete Morse theory',
    date:'Summer 2023',
    src: 'Morse_Theory',
    summary: 'This paper, developed during a 2023 summer project with Dr. Jeff Hicks, presents a combinatorial proof that the square of the differential is zero in simplicial complexes. Key concepts include differential definition and sign assignment within a simplicial complex. The findings were shared at the IMA TMT conference, and the presentation is available online.'},
  { 
    title: 'Brace theory',
    date: 'Winter 2022',
    src: 'The_Study_Of_Braces_And_The_Yang_Baxter_Equation',
    summary: 'In my fourth-year group project supervised by Prof. Agata Smoktunowicz, we explored how algebraic objects called braces relate to set-theoretic solutions of the Yang-Baxter equation and Jacobson radical rings. Braces are similar to rings but involve noncommutative adjoint multiplication.'
  },
  { 
    title: 'Coxeter groups',
    src: 'Coxeter_Groups',
    date: 'Winter 2023',
    summary: 'This project was the final assessment for a reading course on the representation theory of the symmetric group, focusing on Coxeter groups in vector spaces. The course, supervised by Dr. Pavel Safronov, was one of two he oversaw during my undergraduate studies, and I highly recommend his courses or reading groups if given the opportunity.',
  },
  { 
    title: 'Covering spaces of the figure of eight',
    src: 'Covering_Spaces_Of_The_Figure_Of_Eight',
    date: 'Summer 2021',
    summary: 'During the summer of 2021, I explored Algebraic Topology, focusing on the covering spaces of the figure-eight in an unpaid project under Prof. Jon Pridham. I incorporated my interest in Celtic knots into the research and shared my findings in Chalkdust magazine, available here: https://chalkdustmagazine.com/features/covering-infinity/',
  }
]);

const handleDocumentClick = (src) => {
  window.location.href = `/papers/${src}`;
};
</script>

<style scoped>
.nuxt-link {
  .squint-icon {
    transform: rotate(-45deg);
    transition: transform 0.3s ease-in-out;
    cursor: pointer;
  }
}
.nuxt-link:hover {
  .squint-icon {
    transform: rotate(-55deg);
  }
}
</style>
