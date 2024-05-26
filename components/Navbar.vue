<template>
    <nav class="h-1/6 p-4">
        <div class="container mx-auto flex justify-between items-center">
            <div class="w-full">
                <ul class="flex w-full justify-around items-center">
                    <li>
                        <NuxtLink to="/About-Me" class="text-white hover:text-gray-500">About Me</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/writing" class="text-white hover:text-gray-500">Papers</NuxtLink>
                    </li>
                    <li class="flex">
                        <NuxtLink to="/">
                            <NuxtImg src="/images/Spiral-2.png" alt="Intricate Spiral Design" class="w-24"/>
                            <!-- <img src="/images/Spiral-2.png" alt="Intricate Spiral Design" class="w-24"/> -->
                        </NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/courses" class="text-white hover:text-gray-500">Courses</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/tutoring" class="text-white hover:text-gray-500">Tutoring</NuxtLink>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script setup>
</script>

<style scoped>
/* Add any scoped styles for the Navbar component here */
</style>
