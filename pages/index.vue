<template>
  <div class="flex flex-col items-center gap-8 justify-start">
    <div class="flex flex-col items-start gap-2 p-2 lg:w-2/3 xl:w-[45rem] ">
      <h1 class="text-white text-4xl">Hi, I'm Sophie</h1>
      <span class="text-md font-light text-gray-200">PhD student | pi calculator</span>
      <span class="text-gray-100">
        Graduated summer 2024 with a 1st class MMath from the University of Edinburgh.
        Now pursuing a PhD at the University of Edinburgh under Prof. Antony Maciocia,
        focusing on algebraic geometry and category theory.
      </span>
      <div class="container gap-2">
        <NuxtImg src="/images/portrait.jpeg" alt="Photo of myself at the park"
          class="text-white rounded-2xl w-full div1" />
        <NuxtImg src="/images/allgrads.jpeg" alt="Photo of myself and my fellow graduates on graduation day"
          class="text-white rounded-2xl  div2" />
        <NuxtImg src="/images/piday22.jpeg" alt="Photo of myself and my fellow pi day friends"
          class="text-white rounded-2xl  w-full div3" />
        <!-- <NuxtImg src="/images/hike.jpeg" alt="Photo of myself and friends hiking" -->
        <!-- class="text-white rounded-2xl w-72 h-auto" /> -->
      </div>

      <h5 class="font-semibold text-lg text-white">Pi Day</h5>
      <span class="text-gray-100"> I've been involved in two epic sessions of calculating pi by hand, working with
        Matt Parker in 2021 and 2023. Check the videos out here:</span>
      <div class="w-full flex gap-4 py-2 ">
        <a href="https://www.youtube.com/watch?v=dtiLxLrzjOQ" target="_blank" class="w-full">
          <div
            class="hover:bg-stone-800 !px-3 !py-4 nuxt-link flex text-white w-full items-center justify-between cursor-pointer flex w-full items-center justify-between rounded border border-neutral-200 border-neutral-700 bg-neutral-800 cursor-pointer">
            Can we calculate 100 digits of π by hand? The William Shanks method.
            <NuxtImg src="/images/arrow-right-solid.svg" alt="Empty Cart Image" class="squint-icon !w-4 text-white" />
          </div>
        </a>
        <a href="https://www.youtube.com/watch?v=LIg-6glbLkU" target="_blank" class="w-full">
          <div
            class="hover:bg-stone-800 !px-3 !py-4 nuxt-link flex text-white w-full items-center justify-between cursor-pointer flex w-full items-center justify-between rounded border border-neutral-200 border-neutral-700 bg-neutral-800 cursor-pointer">
            The biggest hand calculation in a century! [Pi Day 2024]
            <NuxtImg src="/images/arrow-right-solid.svg" alt="Empty Cart Image" class="squint-icon !w-4 text-white" />
          </div>
        </a>
      </div>
      <!-- <h5 class="font-semibold text-white">Hobbies</h5>
      <span class="text-gray-100">
        I've been a member of the Maths Soc committee and am an active part of the Edinburgh Maths community. I’ve
        attended a TMiP clopen mic night and would love to join more if I have the time! In my spare time, I enjoy
        ballroom and tap dancing, choral singing, and designing Celtic knots.
      </span> -->
    </div>


    <PdfOptions />
  </div>
</template>

<script setup>
import AboutMe from '~/pages/About-Me.vue';
</script>

<style scoped>
/* Rainbow gradient button styles */
.rainbow-gradient-btn {
  position: relative;
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.3s ease;
}

.rainbow-gradient-btn::before {
  content: '';
  position: absolute;
  width: 110%;
  height: 350%;
  background: conic-gradient(#FF2E2E,
      #FF831E,
      #FCFF51,
      #58FF57,
      #575FFF,
      #D257FF,
      #FF57E5,
      #FF1556);
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(0deg);
  z-index: -1;
}

.rainbow-gradient-btn:hover {
  transform: scale(1.1);
}

.rainbow-gradient-btn:hover::before {
  animation: spin 4s infinite linear;
}

@keyframes spin {
  to {
    transform: translate(-50%, -50%) rotate(360deg);
  }
}

/* Additional button styling */
.rainbow-gradient-btn::after {
  content: 'Take a look';
  position: absolute;
  width: 96%;
  height: 86%;
  background-color: white;
  border-radius: 0.4em;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.25rem;
  color: black;
  font-weight: 500;
  z-index: 1;
}

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
