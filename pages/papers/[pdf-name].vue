<template>
    <div class="w-full flex flex-col justify-center items-center">
      <!-- Display the current PDF name from the route parameter -->
          <p>{{ pdfName }}</p>
      <!-- Dynamically set the source of the PDF based on the route parameter -->
      <embed :src="pdfSrc" width="90%" height="900px" />
    </div>
  </template>
  
  <script setup>
  import { computed } from 'vue';
  import { useRoute } from 'vue-router';

const route = useRoute();
  
  // Compute the PDF source URL dynamically from the route parameter
   const pdfName = computed(() =>route.params.pdfname);
   const pdfSrc = computed(() => `/${pdfName?.value}.pdf`);
   console.log(pdfSrc);
  </script>
  
  <style scoped>
  /* Add any scoped styles for your component here */
  </style>
  