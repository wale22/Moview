import {initializeApp,} from 'firebase/app'
import {
    getFirestore,
    collection,
    getDoc,
    getDocs,
    addDoc,
    doc,
    deleteDoc,
    onSnapshot,
    query,
    where,
    orderBy

} from 'firebase/firestore'


const firebaseConfig = {
    apiKey: "AIzaSyDZgwd1A8jJX5wzG57mMUAYCq1L6Edzp2A",
    authDomain: "moview-9d09a.firebaseapp.com",
    projectId: "moview-9d09a",
    storageBucket: "moview-9d09a.appspot.com",
    messagingSenderId: "76176614191",
    appId: "1:76176614191:web:e1255d5b6df581c0b0f7da",
    measurementId: "G-K79LS3YCBZ"
  };

// initialization of a firebase db

const app=initializeApp(firebaseConfig)

// creating of a firestore db

const db=getFirestore(app)

// collection reference

const colRef= collection(db,'Moview')


// getting docs


getDocs(colRef)
.then((e)=>{console.log(e)})
.catch()

// adding and deleting new doc
addDoc(colRef,{})
.then()
.catch

// deleting a doc
const ref=doc(db,'Moview', id)
deleteDoc(ref)
.then()
.catch()

// using snapshot to get updated

onSnapshot(colRef,(e)=>{

})


// query to filter out un wanted data or get specific datas


data= query(colRef, where('key','==', 'constraint'), orderBy('key', 'order(ascending or descending)'))