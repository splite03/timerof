import { getDifferenceOfEach } from 'utils/getDifference';
import { getAllMetrics } from 'utils/getMetricsFromMilliseconds';
import { useFirestore } from 'hooks/useFirestore';
import { computed, ref, unref, watch } from 'vue'
import { TODAY } from '../constants'

export const useDoorsData = () => {
    const {
        getDoorsData,
        firestore,
        newDayUpdate,
        test,
        updateDocInDays,
    } = useFirestore();
    const todayDoors = ref([]);
    const allDoors = ref({});
    const dataLoaded = ref(false);
    const currentDaysDoorsLength = ref(0);
    const isTimeGoes = ref(false);
    const idIntervalForCounting = ref<any>(null);

    async function onToggleTimeGoes() {
        isTimeGoes.value = !isTimeGoes.value;
        dataLoaded.value = false;

        if (isTimeGoes.value) {
            todayDoors.value.push({
                start: new Date().getTime(),
                end: 0
            });

            await updateDocInDays(todayDoors.value);

            idIntervalForCounting.value = setInterval(countTimer, 1000);
            dataLoaded.value = true;
            return console.log(`Start Door ${new Date().toLocaleString()}: `, unref(isTimeGoes));
        }

        todayDoors.value[todayDoors.value.length - 1].end = new Date().getTime();
        await updateDocInDays(todayDoors.value);

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
        allDoors.value = await getDoorsData('doors');

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
    watch(currentDaysDoorsLength, () => {
        console.log('UPD currentDaysDoorsLength: ', unref(currentDaysDoorsLength))
    }, {immediate: true})

    const buttonTitle = computed(() => unref(isTimeGoes) ? 'Завершить' : 'Начать');
    const allDoorsMetrics = computed(() => getAllMetrics(unref(currentDaysDoorsLength)));

    return {
        onToggleTimeGoes,
        buttonTitle,
        dataLoaded,
        allDoorsMetrics,
        currentDaysDoorsLength,
    }
}