<template>
    <main
        class="main"
        :data-loaded="dataLoaded"
    >
        <div class="main__today main-today">
            <h1 class="main-today__title">
                {{ TODAY }}
            </h1>
            <p class="main-today__time">
                <span>{{ currentDayLengthData.string }}</span>
                <span>{{ workDayLengthNeedToWorkData.string }}</span>
            </p>
            <Progress
                :percent="percent"
                :dataLoaded="dataLoaded"
                class="main-today__progress"
            ></Progress>
            <Button
                class="main-today__btn"
                @click="onToggleTimeGoes"
                :disabled="!dataLoaded"
            >
                {{ buttonTitle }}
            </Button>
            <div class="main-today__version">v0.1</div>
        </div>
    </main>
</template>

<script setup>
    import Progress from 'src/components/main/Progress.vue'
    import { useDoorsData } from 'hooks/useDoorsData.js'
    import { computed, unref, watch } from 'vue'
    import { TODAY, WORK_DAY_IN_MILLISECONDS } from 'constants/index.js'
    import { getAllMetrics } from 'utils/getMetricsFromMilliseconds.js'
    import Button from 'components/main/Button.vue'

    const {
        allDoorsMetrics,
        currentDaysDoorsLength,
        dataLoaded,
        buttonTitle,
        onToggleTimeGoes,
    } = useDoorsData();

    const currentDayLengthData = computed(() => getAllMetrics(unref(currentDaysDoorsLength)));
    const workDayLengthNeedToWorkData = computed(() => getAllMetrics(WORK_DAY_IN_MILLISECONDS - unref(currentDaysDoorsLength)));
    const percent = computed(() => unref(allDoorsMetrics).percent);

    watch([currentDaysDoorsLength, currentDayLengthData], () => {
        // console.log('currentDaysDoorsLength', unref(currentDaysDoorsLength));
        // console.log('currentDayLengthString', unref(currentDayLengthString));
    }, {immediate: true});
</script>

<style lang="scss" scoped>
    @import "./styles/Main/component";
</style>