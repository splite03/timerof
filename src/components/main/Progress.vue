<template>
    <div
        class="progress"
        :data-loaded="dataLoaded"
    >
        <div
            class="progress__filler"
            :style="{width: `${percent}%`}"
        ></div>
    </div>
</template>

<script setup>
    defineProps({
        percent: Number,
        dataLoaded: Boolean
    });
</script>

<style lang="scss" scoped>
    @import "src/components/main/styles/Progress/component";
</style>