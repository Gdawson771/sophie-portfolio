<template>
   <div class="text-white p-4 w-full lg:w-2/3 xl:w-[45rem] flex flex-col gap-2">
    <span class="text-xl font-semibold">
      My Papers
    </span>
    <span>
  
    So far on my mathematical journey I've had the pleasure of working with some brilliant mathematicians, exploring exciting
    areas of mathematics. Feel free to dive into the papers below and sate your mathematical hunger!
    </span>
  </div>
  <div class="w-full flex-col gap-8 flex break-words w-full flex min-h-screen items-center justify-center pb-40">
    <div v-for="document in firstRowDocuments" class="p-4 text-white w-full lg:w-2/3 xl:w-[45rem] flex flex-col gap-4">
       <div>
        <h3 class="text-lg font-semibold">
          {{document.title}}
        </h3>
        <h5 class="font-light text-sm text-gray-300 pb-3">{{ document.date }}</h5>
        <span v-html="document.summary" class="text-gray-200"/> 
      </div>
      <div @click="handleDocumentClick(document.src)" @contextmenu.prevent="openInNewTab(document.src)" class="nuxt-link link-container">
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
    summary: "This paper explores the application of mirror maps to reflexive polytopes in Algebraic Geometry. In my dissertation I found that these mirror map power series have all integer coefficients, and that a variant map produces series with all positive integers."
},
  { 
    title: 'Discrete Morse theory',
    date:'Summer 2023',
    src: 'Morse_Theory',
    summary: 'This paper, developed during a 2023 summer project with Dr. Jeff Hicks, presents a combinatorial proof that the square of the differential is zero in simplicial complexes. Key concepts include differential definition and sign assignment within a simplicial complex. The findings were shared at the IMA TMT conference, and the presentation is available <a class="text-blue-500" href="https://youtu.be/NTul8QoZdYI?si=D_5pBoClfkIYmGLW">here</a>.'},
  { 
    title: 'Brace theory',
    date: 'Winter 2022',
    src: 'The_Study_Of_Braces_And_The_Yang_Baxter_Equation',
    summary: 'This project was the final assessment for a reading course on the representation theory of the symmetric group, focusing on Coxeter groups in vector spaces.'
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
    summary: 'During the summer of 2021, I explored Algebraic Topology, focusing on the covering spaces of the figure-eight in an unpaid project under Prof. Jon Pridham. I incorporated my interest in Celtic knots into the research and shared my findings in Chalkdust magazine, available <a class="text-blue-500" href="https://chalkdustmagazine.com/features/covering-infinity/">here</a>.',
  }
]);

const handleDocumentClick = (src) => {
  window.location.href = `/papers/${src}`;
};

const openInNewTab = (src) => {
  window.open(`/papers/${src}`, '_blank');
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
