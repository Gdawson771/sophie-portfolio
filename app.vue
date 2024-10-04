<template>
  <div class="bg-[#111010] h-full min-h-screen flex flex-col justify-center items-center">
    <div class="justify-center items-center flex w-full flex-col">
      <NuxtImg src="/images/white_knot_2.png" alt="One of the knots I have drawn" layout="responsive" class="opacity-20 w-[30rem]" width="480" height="480" />
      <div class="absolute">
        <NuxtImg src="/images/portraitcloseup.jpg" alt="Closeup portrait of myself"
          class="mt-16 mx-auto rounded-full h-32 w-32 border-2 border-white" width="128" height="128"  layout="responsive"/>
        <h1 class="text-white text-4xl">Hi, I'm Sophie</h1>
        <span class="text-md font-light text-gray-200">PhD student | pi calculator</span>
      </div>
    </div>
    <Navbar class="-mt-50" />
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

<style scoped></style>
