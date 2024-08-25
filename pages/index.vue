<template>
  <div class="flex flex-col items-center gap-8 justify-start">
    <div class="flex flex-col items-start gap-2 p-4 lg:w-2/3 xl:w-[45rem] ">

      <span class="text-gray-100">
        Graduated summer 2024 with a 1st class MMath from the University of Edinburgh.
        Now pursuing a PhD at the University of Edinburgh under Prof. Antony Maciocia,
        focusing on algebraic geometry and category theory.
      </span>
      <div class="container gap-2">
        <div class="relatitve w-full div1 h-full">
        <!-- Parent container -->
        <NuxtImg src="/images/portrait.jpeg" alt="Photo of myself at the park"
          class="rounded-2xl w-full transition-opacity duration-300 hover:opacity-50">
        </NuxtImg>
        </div>
        <NuxtImg src="/images/allgrads.jpeg" alt="Photo of myself and my fellow graduates on graduation day"
          class="text-white rounded-2xl  div2" />
        <NuxtImg src="/images/piday22.jpeg" alt="Photo of myself and my fellow pi day friends"
          class="text-white rounded-2xl  w-full div3" />
      </div>
      <h5 class="font-semibold text-lg text-white">Pi Day</h5>
      <span class="text-gray-100"> I've been involved in two epic sessions of calculating pi by hand, working with
        Matt Parker in 2022 and 2024. Check the videos out here:</span>
      <div class="w-full flex gap-4 py-2 ">
        <a href="https://www.youtube.com/watch?v=dtiLxLrzjOQ" target="_blank" class="w-full link-container nuxt-link">
          <div>
            Can we calculate 100 digits of π by hand? The William Shanks method.
          </div>
          <NuxtImg src="/images/arrow-right-solid.svg" alt="Empty Cart Image" class="squint-icon !w-4 text-white" />
        </a>
        <a href="https://www.youtube.com/watch?v=LIg-6glbLkU" target="_blank" class="link-container nuxt-link w-full">
          <div>
            The biggest hand calculation in a century! [Pi Day 2024]
          </div>
          <NuxtImg src="/images/arrow-right-solid.svg" alt="Empty Cart Image" class="squint-icon !w-4 text-white" />
        </a>
      </div>
    </div>
    <PdfOptions />
  </div>
</template>

<script setup>
import AboutMe from '~/pages/About-Me.vue';

</script>

<style scoped>
.icon {
  width: 1rem;
  /* equivalent to !w-4 */
  fill: currentColor;
}

a {
  text-decoration: none;
  width: 100%;
}



.container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-auto-columns: 1fr;
  grid-auto-flow: row;
  grid-template-areas:
    "div1 div2"
    "div1 div3";
}

.div1 {
  grid-area: div1;
}

.div2 {
  grid-area: div2;
}

.div3 {
  grid-area: div3;
}
</style>
