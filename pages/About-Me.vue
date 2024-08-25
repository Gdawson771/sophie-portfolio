<template>
   <div class="w-full h-full min-h-screen text-white flex flex-col gap-8 items-center justify-start ">

      <div class="p-4 gap-2 rounded-xl text-white w-full lg:w-2/3 xl:w-1/2 flex flex-col">
         <div class="flex flex-col">
            <h2 class="text-2xl">
               Hello, I'm <span class="text-white shadow font-semibold">Sophie</span>
            </h2>
            <span class="text-md font-light text-gray-200">Mathemagician/PhD student/cat lover</span>

         </div>
      
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