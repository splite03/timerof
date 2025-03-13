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
                <div class="main-today__box">
                    <span class="main-today__number">{{ currentDayLengthData.string }}</span>
                    <span class="main-today__description">Отработано</span>
                </div>
                <div class="main-today__box">
                    <span class="main-today__number">{{ workDayLengthNeedToWorkData.string }}</span>
                    <span class="main-today__description">Нужно сегодня</span>
                </div>
            </p>
          <p class="main-today__time">
            <label class="main-today__wrapper">
              <input
                  v-model="useOverAndDownTime"
                  class="main-today__input"
                  type="checkbox"
              >
              <div class="main-today__checkbox"></div>
            </label>
            <div class="main-today__box main-today__box--transparent">
              <span
                  class="main-today__difference main-today__number"
                  :class="{
                    'main-today__difference--loading': !dataLoaded,
                    [`main-today__difference--${overAndDownTime.overtime ? 'overtime' : 'downtime'}`]: true,
                  }"
              >
                {{ useOverAndDownTime ? getAllMetrics(0).string : overAndDownTime.string }}
              </span>
            </div>
          </p>
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
    import {computed, ref, unref, watch} from 'vue'
    import { TODAY, WORK_DAY_IN_MILLISECONDS } from 'constants/index.js'
    import { getAllMetrics } from 'utils/getMetricsFromMilliseconds.js'
    import Button from 'components/main/Button.vue'
    import {getWorkDaysInMonth, isWeekend} from "utils/timeFuncs.js";

    const {
        allDoorsMetrics,
        currentDaysDoorsLength,
        dataLoaded,
        buttonTitle,
        onToggleTimeGoes,
        overAndDownTime,
    } = useDoorsData();

    const useOverAndDownTime = ref(false);

    watch(useOverAndDownTime, () => {
      console.log(unref(useOverAndDownTime))
      console.log(unref(overAndDownTime))
    })
    const currentDayLengthData = computed(() => getAllMetrics(unref(currentDaysDoorsLength)));
    const workDayLengthNeedToWorkData = computed(() => {
        const workDayLength = WORK_DAY_IN_MILLISECONDS - (unref(useOverAndDownTime) ? unref(overAndDownTime).value : 0);
        const timeWorked = workDayLength - unref(currentDaysDoorsLength);

        return isWeekend(...TODAY.split('.')) ? getAllMetrics(0) : getAllMetrics(timeWorked > 0 ? timeWorked : 0);
    });
</script>

<style lang="scss" scoped>
    @import "./styles/Main/component";
</style>