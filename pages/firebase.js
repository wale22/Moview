import { initializeApp} from "firebase/app";
import { addDoc, collection, doc, getDoc, getFirestore, where,setDoc, query, onSnapshot } from "firebase/firestore"; 

const firebaseConfig = {
    apiKey: "AIzaSyDZgwd1A8jJX5wzG57mMUAYCq1L6Edzp2A",
    authDomain: "moview-9d09a.firebaseapp.com",
    projectId: "moview-9d09a",
    storageBucket: "moview-9d09a.appspot.com",
    messagingSenderId: "76176614191",
    appId: "1:76176614191:web:e1255d5b6df581c0b0f7da",
    measurementId: "G-K79LS3YCBZ"
};




export const app=initializeApp(firebaseConfig)

export const db=getFirestore(app)

 export const usrRef=collection(db,'Users')



export const addUser=(user)=>{
    let res=''
    setDoc(doc(usrRef, user.email),{
        Name:user.name,
        Password:user.password
    } )
    .then(
        res='success'
    )
    .catch((e)=>res='error')

    return res
}



export const authUser=(user)=>{
  
}
 
