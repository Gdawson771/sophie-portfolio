<template>
   <div class="w-full h-full min-h-screen text-white flex flex-col gap-8 items-center justify-start ">

      <div class="p-4 gap-2 rounded-xl text-white w-full lg:w-2/3 xl:w-1/2 flex flex-col">
         <div class="flex flex-col">
            <h2 class="text-2xl">
               Hello, I'm <span class="text-white shadow font-semibold">Sophie</span>
            </h2>
            <span class="text-md font-light text-gray-200">Mathemagician/PhD student/cat lover</span>

         </div>
         <span class="text-gray-100">
            I graduated from the University of Edinburgh with an MMath 1st class this summer -- where an MMath is a 5
            year
            integrated masters in mathematics. Going forward, I will be supervised by Prof Antony Maciocia in a
            PhD at the University of Edinburgh, looking at algebraic geometry and category theory.
         </span>

         <h5 class="font-semibold text-white">Pi Day</h5>
         <span class="text-gray-100"> I've been involved in two epic sessions of calculating pi by hand, working with
            Matt Parker in 2021 and 2023. Check the videos out here:</span>
         <div class="w-full flex gap-4 py-2 ">
            <a href="https://www.youtube.com/watch?v=dtiLxLrzjOQ" target="_blank" class="w-full">
               <div
                  class="!px-3 !py-4 nuxt-link flex text-white w-full items-center justify-between cursor-pointer flex w-full items-center justify-between rounded border border-neutral-200 border-neutral-700 bg-neutral-800 cursor-pointer">
                  Can we calculate 100 digits of π by hand? The William Shanks method.
                  <NuxtImg src="/images/arrow-right-solid.svg" alt="Empty Cart Image"
                     class="squint-icon !w-4 text-white" />
               </div>
            </a>
            <a href="https://www.youtube.com/watch?v=LIg-6glbLkU" target="_blank" class="w-full">
               <div
                  class="!px-3 !py-4 nuxt-link flex text-white w-full items-center justify-between cursor-pointer flex w-full items-center justify-between rounded border border-neutral-200 border-neutral-700 bg-neutral-800 cursor-pointer">
                  The biggest hand calculation in a century! [Pi Day 2024]
                  <NuxtImg src="/images/arrow-right-solid.svg" alt="Empty Cart Image"
                     class="squint-icon !w-4 text-white" />
               </div>
            </a>
         </div>
         <h5 class="font-semibold text-white">Hobbies</h5>
         <span class="text-gray-100">
            I've been a member of the Maths Soc committee and am an active part of the Edinburgh Maths community. I’ve
            attended a TMiP clopen mic night and would love to join more if I have the time! In my spare time, I enjoy
            ballroom and tap dancing, choral singing, and designing Celtic knots.
         </span>
         <NuxtLink to="/writing" class="mx-auto">
            <button
               class="w-40 text-black text-lg bg-white w-full flex flex-col p-4 gap-2 rounded-xl hover:bg-gray-200 cursor-pointer">
               See my papers
            </button>
         </NuxtLink>
      </div>
   </div>

</template>

<script setup>
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