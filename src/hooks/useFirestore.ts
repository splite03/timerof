// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, addDoc, setDoc, updateDoc, doc, getDoc } from "firebase/firestore";
import { reactive, computed } from 'vue'
import {AllDoors, DayData, Door} from '../types/Doors'
import {TODAY, clctionName} from '../constants'
import {emptyDayData} from "../constants/data";

// Initialize Firebase
const state: any = reactive({
    firestore: null,
});

const getters = {
    firestore: computed(() => state.firestore),
}

const initFirestore = async () => {
    // Your web app's Firebase configuration
    const firebaseConfig = {
        apiKey: "AIzaSyCjAFCXwbDwhHRorGVmW99hOVVrfASb72g",
        authDomain: "timerof-2745f.firebaseapp.com",
        projectId: "timerof-2745f",
        storageBucket: "timerof-2745f.firebasestorage.app",
        messagingSenderId: "723564130006",
        appId: "1:723564130006:web:b2950274d04719f77ca377"
    };
    const app = initializeApp(firebaseConfig);

    state.firestore = getFirestore(app);
}
const getDoorsData = async (collectionName: string): Promise<AllDoors | undefined> => {
    try {
        const querySnapshot = await getDocs(collection(state.firestore, collectionName));
        const result: AllDoors = {};

        querySnapshot.forEach((doc) => {
            result[doc.id] = doc.data() as DayData;
        });

        return result;
    } catch(e) {
        console.error(`Error reading collection ${collectionName}: `, e)
    }
}
const putInCollection = async (data: Door) => {
    try {
        return await addDoc(collection(state.firestore, clctionName), data);
    } catch (e) {
        console.error("Error adding document: ", e);
    }
}
const updateDocInDays = async (newData: any, day: string = TODAY) => {
    await setDoc(doc(state.firestore, clctionName, day), newData);
}
const newDayUpdate = async () => {
    await setDoc(doc(state.firestore, clctionName, TODAY), emptyDayData);
}

const test = async () => {

}
const getSingleDoc = async (date: string) => {
    const docRef = doc(state.firestore, clctionName, date);
    const docSnap = await getDoc(docRef);

    return docSnap.data();
}

export const useFirestore = () => {
    return {
        test,
        newDayUpdate,
        updateDocInDays,
        initFirestore,
        getDoorsData,
        putInCollection,
        getSingleDoc,
        ...getters,
    }
}