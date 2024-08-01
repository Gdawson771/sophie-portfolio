<template>
    <nav class="h-1/6 p-16 pb-16">
        <div class="w-full flex justify-center">
            <div class="w-full lg:w-2/3 xl:w-[45rem] p-2">
                <ul class="flex w-full justify-start gap-8 items-center">
                    <li>
                        <NuxtLink to="/" class="text-white hover:text-gray-200">Home</NuxtLink>
                    </li>
                    <!-- <li> -->
                        <!-- <NuxtLink to="/writing" class="text-white hover:text-gray-200">Papers</NuxtLink> -->
                    <!-- </li> -->
                    <!-- <li class="flex">
                        <NuxtLink to="/">
                            <NuxtImg src="/images/spiral-2.png" alt="Intricate Spiral Design" class="w-8 xl:w-24"/>
                        </NuxtLink>
                    </li> -->
                    <li>
                        <NuxtLink to="/courses" class="text-white hover:text-gray-200">Courses</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/tutoring" class="text-white hover:text-gray-200">Tutoring</NuxtLink>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script setup>
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
/* Add any scoped styles for the Navbar component here */
</style>
