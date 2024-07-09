<template>
    <div class="flex flex-col pt-32 items-center h-screen gap-8">
        <h1 class="text-white text-5xl">Hi, I'm Sophie</h1>
        <h3 class="text-gray-100 text-2xl">Want to check out my papers?</h3>
        <NuxtLink to="/writing">
            <button class="text-black bg-white w-full flex flex-col p-4 gap-2 rounded-xl shadow-2xl hover:bg-gray-200 transition-colors duration-300 cursor-pointer">
              Take a look
            </button>
        </NuxtLink>
    </div>
</template>

<script setup>
import AboutMe from '~/pages/About-Me.vue';
</script>

<style scoped>
.blue-gradient {
    background-image: linear-gradient(0deg,
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