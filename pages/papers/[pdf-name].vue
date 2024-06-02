<template>
  <div class="w-full flex flex-col justify-center items-center gap-4">
    <!-- Dynamically set the source of the PDF based on the route parameter -->
    <NuxtLink to="../writing">
      <div
        class="bg-gray-700 text-white px-4 py-2  border-2 border-green-300 rounded-xl shadow-2xl hover:bg-gray-600 transition-colors duration-300 cursor-pointer">
        Go back to my other papers
      </div>
    </NuxtLink> 
    <div class="bg-white py-8 px-6 w-11/12 rounded-2xl shadow-2xl flex items-center justify-center">
      <embed :src="pdfSrc" width="99%" height="600px" />
    </div>
    </div>
</template>

<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();

// Compute the PDF source URL dynamically from the route parameter
const pdfName = computed(() => route.params.pdfname);
const pdfSrc = computed(() => `/${pdfName?.value}.pdf`);
console.log(pdfSrc);
</script>

<style scoped>
/* Add any scoped styles for your component here */
</style>