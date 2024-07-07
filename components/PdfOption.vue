<template>
	<NuxtLink :to="`/papers/${src}`" class="no-underline">
		<div class="hex">
			<div class="top"> </div>
			<div class="middle flex flex-col gap-2 p-2">
				<span class="w-full text-green-400 hover:text-green-300">{{ title }}</span>
				<span class="text-gray-300 hover:text-gray-100">{{ summary }}</span>
			</div>
			<div class="bottom"></div>
		</div>
		<div class="hexagon">
			<!-- <span class="w-full text-green-400 hover:text-green-300">{{ title }}</span>
			<span class="text-gray-300 hover:text-gray-100">{{ summary }}</span> -->
		</div>
	</NuxtLink>
</template>

<script>
export default {
	// bg-gray-700 border-2 border-green-300 w-[20rem] flex flex-col p-4 gap-2 rounded-xl shadow-2xl
	//hover:bg-gray-600 transition-colors duration-300 cursor-pointer
	props: {
		title: String,
		summary: String,
		src: String,
	}
}
</script>

<style scoped>
.hex {
	float: left;
	margin-left: 10px;
	margin-bottom: -26px;
}

.hex .top {
	width: 0;
	border-bottom: 90px solid rgb(20, 62, 20);
	border-left: 157px solid transparent;
	border-right: 157px solid transparent;
}

.hex .middle {
	width: 314px;
	height: 181px;
	background: rgb(20, 62, 20);
}

.hex .bottom {
	width: 0;
	border-top: 90px solid rgb(20, 62, 20);
	border-left: 157px solid transparent;
	border-right: 157px solid transparent;
}
</style>