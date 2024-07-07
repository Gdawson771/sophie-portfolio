<template>
    <button @click="prevPaper" class="prev-button">Prev</button>
    <div class="carousel-container w-full gap-2 flex justify-center items-center overflow-hidden">
     
        <PdfOption  @click="specificPaper(index)" class="paper-slide" :key="index"
            :style="{ transform: `translateX(${currentIndex * 20}rem)` }" v-for="(document, index) in documents"  :title="document.title"
            :summary="document.quick_summary" :src="document.src" />
    </div>
    <button @click="nextPaper" class="next-button">Next</button>
</template>

<script>
export default {
    props: {
        papers: Array,
        documents: Array,
    },
    data() {
        return {
            currentIndex: 0,
        }
    },
    methods: {
        nextPaper() {
            this.currentIndex--;
        },
        prevPaper() {
            this.currentIndex++;
            console.log(2 - this.currentIndex)
        },
        specificPaper(index) {
            console.log(2 - this.currentIndex)
            this.currentIndex = 2 - index;
        }
    },
}
</script>

<style scoped>
.carousel-container {
    display: flex;
    align-items: center;
    position: relative;
    width: 100%;
}

.paper-slide {
    background-color: white;
    min-width: 20rem;
    height: 24rem;
    display: flex;
    justify-content: center;
    transition: transform 0.5s ease-in-out;
}

.prev-button,
.next-button {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background-color: #fff;
    border: none;
    padding: 10px 20px;
    cursor: pointer;
    z-index: 2;
}

.prev-button {
    left: 10px;
}

.next-button {
    right: 10px;
}
</style>
