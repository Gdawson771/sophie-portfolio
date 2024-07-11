<template>
    <div class="flex flex-col pt-32 items-center h-screen gap-8">
        <h1 class="text-white text-5xl">Hi, I'm Sophie</h1>
        <h3 class="text-gray-100 text-2xl">Want to check out my papers?</h3>
        <NuxtLink to="/writing">
            <button class="rainbow-gradient-btn text-black w-full justify-center items-center flex flex-col px-8 py-5 gap-2 rounded-xl shadow-2xl hover:bg-gray-200 transition-colors duration-300 cursor-pointer">
              Take a look
            </button>
        </NuxtLink>
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
  background: conic-gradient(
    #FF2E2E,
    #FF831E,
    #FCFF51,
    #58FF57,
    #575FFF,
    #D257FF,
    #FF57E5,
    #FF1556
  );
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
</style>
