<template>
	<NuxtLink :to="`/papers/${src}`" class="no-underline">
		<div
			class="bg-gray-700 border-2 border-green-300 w-full flex flex-col p-4 gap-2 rounded-xl shadow-2xl hover:bg-gray-600 transition-colors duration-300 cursor-pointer">
			<!-- Use props for dynamic content -->
			<span class="w-full text-green-400 hover:text-green-300">{{ title }}</span>
			<span class="text-gray-300 hover:text-gray-100">{{ summary }}</span>
		</div>
	</NuxtLink>
</template>

<script>
export default {
	props: {
		title: String,
		summary: String,
		src: String,
	}
}
</script>

<style scoped>
/* Additional custom styles can be added here if needed */
</style>