import { getDifferenceOfEach } from 'utils/getDifference';
import { getAllMetrics } from 'utils/getMetricsFromMilliseconds';
import { useFirestore } from 'hooks/useFirestore';
import { computed, ref, unref, watch } from 'vue'
import {TODAY, clctionName, WORK_DAY_IN_MILLISECONDS} from '../constants'
import {isWeekend} from "../utils/timeFuncs";
import {emptyDayData} from "../constants/data";
import {AllDoors} from "../types/Doors";

export const useDoorsData = () => {
    const {
        getDoorsData,
        firestore,
        newDayUpdate,
        test,
        updateDocInDays,
        getSingleDoc
    } = useFirestore();
    const todayDoors = ref([]);
    const allDoors = ref({});
    const dataLoaded = ref(false);
    const currentDaysDoorsLength = ref(0);
    const isTimeGoes = ref(false);
    const idIntervalForCounting = ref<any>(null);
    const thisMonthTotalDays = computed<AllDoors>(() => {
        const [day, month, year] = TODAY.split('.');
        const tempDays = {};

        for (let i = 1; i < +day; i++) {
            const tempDate = new Date(+year, +month - 1, i).toLocaleString().split(',')[0];

            tempDays[tempDate] = unref(allDoors)[tempDate] ?? emptyDayData;
        }

        return tempDays;
    });
    const thisMonthOnlyWorkDaysCount = computed<number>(() => {
        const [day, month, year] = TODAY.split('.');
        let count = 0;

        for (let i = 1; i < +day; i++) {
            if (!isWeekend(i, +month, +year)) {
                count++;
            }
        }

        return count;
    });
    const totalMonthTime = computed(() => {
        return Object.values(unref(thisMonthTotalDays)).reduce((acc, cur) => acc + (cur.totalTime ?? 0), 0);
    });
    const diffTotal = computed(() => unref(totalMonthTime) - unref(thisMonthOnlyWorkDaysCount) * WORK_DAY_IN_MILLISECONDS)
    const overAndDownTime = computed(() => {
        const isOvertimed = unref(diffTotal) > 0;

        return {
            overtime: isOvertimed,
            string: `${isOvertimed ? '+' : '-'}${getAllMetrics(Math.abs(diffTotal.value)).string}`,
            value: unref(diffTotal),
        }
    });

    async function onToggleTimeGoes() {
        isTimeGoes.value = !isTimeGoes.value;
        dataLoaded.value = false;

        if (isTimeGoes.value) {
            todayDoors.value.push({
                start: new Date().getTime(),
                end: 0
            });

            await updateDocInDays({
                doors: todayDoors.value,
                totalTime: allDoors.value[TODAY].totalTime
            });

            idIntervalForCounting.value = setInterval(countTimer, 1000);
            dataLoaded.value = true;
            return console.log(`Start Door ${new Date().toLocaleString()}: `, unref(isTimeGoes));
        }

        todayDoors.value[todayDoors.value.length - 1].end = new Date().getTime();
        await updateDocInDays({
            doors: todayDoors.value,
            totalTime: getDifferenceOfEach(todayDoors.value)
        });

        clearInterval(idIntervalForCounting.value);
        updateCurrentDayLength();
        dataLoaded.value = true;
        return console.log(`End Door ${new Date().toLocaleString()}: `, unref(isTimeGoes));
    }
    function updateCurrentDayLength() {
        currentDaysDoorsLength.value = getDifferenceOfEach(unref(todayDoors));
    }
    function countTimer() {
        currentDaysDoorsLength.value += 1000;
    }

    watch(firestore, async () => {
        allDoors.value = await getDoorsData(clctionName);

        await test();

        if (!allDoors.value[TODAY]) {
            await newDayUpdate();

            allDoors.value[TODAY] = {doors: []};
        }

        todayDoors.value = allDoors.value[TODAY].doors;
        updateCurrentDayLength();

        if (todayDoors.value.length > 0) {
           if (!allDoors.value[TODAY].doors[todayDoors.value.length - 1].end) {
               isTimeGoes.value = true;
               idIntervalForCounting.value = setInterval(countTimer, 1000);
           }
        }

        dataLoaded.value = true;
    }, {once: true})

    const buttonTitle = computed(() => unref(isTimeGoes) ? 'Завершить' : 'Начать');
    const allDoorsMetrics = computed(() => getAllMetrics(unref(currentDaysDoorsLength)));

    return {
        overAndDownTime,
        totalMonthTime,
        onToggleTimeGoes,
        buttonTitle,
        dataLoaded,
        allDoorsMetrics,
        currentDaysDoorsLength,
    }
}