<template>
    <div class="container w-full p-8">
      <PdfOption 
        v-for="document in documents" 
        :key="document.title"
        :title="document.title" 
        :summary="document.summary"
        :src="document.src"/>
    </div>
  </template>
<script setup>
import { ref } from 'vue';

const documents = ref([
  { 
    title: 'Positivity and integrality of mirror maps', 
    src: 'The_positivity_and_integrality_of_mirror_maps',
    summary: 'This paper was the result x`of my Dissertation, supervised by Prof Nick Sheridan at the University of Edinburgh. The concept of a mirror map is present in the fields of Algebraic Geometry and Quantum Physics, and the bizarre fact is that when we apply a mirror map to a reflexive polytope (a special kind of lattice polytope) then the output is a power series whose coefficients are all integers. We examine also a slightly different map, which outputs power series whose coefficients are positive integers. This is supremely unexpected, since the mirror map is obtained through an exponential of a quotient of polynomials with rational coefficients.' 
  },
  { 
    title: 'Discrete Morse theory',
    src: 'Morse_Theory',
    summary: 'I wrote this with the help of Dr Jeff Hicks during my summer project in 2023. The project discusses a combinatorial proof that the square of the differential is zero. For this we define the differential on a simplicial complex, and what a differentiable function looks like. With this and the definition of the sign on a given function through a simplicial complex, we have the ingredients we need to prove the required equality! I spoke about this at the IMA TMT conference, and you can see my talk here: https://youtu.be/NTul8QoZdYI?si=hZetzAgdFHA1X01f'
  },
  { 
    title: 'Brace theory',
    src: 'The_Study_Of_Braces_And_The_Yang_Baxter_Equation',
    summary: 'My fourth year group project was supervised by Prof Agata Smoktunowicz, who is a delight to work with. Braces are algebraic objects like rings, except instead of multiplication we have adjoint multiplication, which is a noncommutative operation. The paper discusses the set theoretic solutions to the Yang-Baxter equation, and Jacobson radical rings, and how these objects correspond to braces.'
  },
  { 
    title: 'Coxeter groups',
    src: 'Coxeter_Groups',
    summary: 'This project was the final assessment for the representation theory of the symmetric group reading course. A Coxeter group is an object in representation theory generated by some set of reflections on a vector space. The reading course was supervised by Dr Pavel Safronov, who was very happy to supervise both of the reading courses I took during my undergraduate degree, and would recommend studying his courses or participating in one of his reading courses if you get the chance.'
  },
  { 
    title: 'Covering spaces of the figure of eight',
    src: 'Covering_Spaces_Of_The_Figure_Of_Eight',
    summary: 'Over the summer of 2021, I dipped my toe into the world of Algebraic Topology, where I studied the covering spaces of the figure of eight in an unpaid summer project supervised by Prof Jon Pridham. To my delight, I managed to sneak in my hobby of celtic knots into the research, and shared my findings on the Chalkdust magazine, which you can read at: https://chalkdustmagazine.com/features/covering-infinity/'
  }
]);
</script>

<style scoped>
/* Add any scoped styles for the Navbar component here */
.container {  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-auto-columns: 1fr;
  gap: 3em 3em;
  grid-auto-flow: row;
  grid-template-areas:
    ". ."
    ". .";
}

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
