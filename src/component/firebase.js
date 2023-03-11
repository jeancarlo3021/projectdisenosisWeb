import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  doc,
  getDoc,
  query,
  where,
  setDoc,
  deleteDoc,
} from "firebase/firestore";
import { getAuth } from "firebase/auth";
import {
  getStorage,
  ref,
  uploadBytes,
  getDownloadURL,
  getBytes,
} from "firebase/storage";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_APIKEY,
  authDomain: process.env.REACT_APP_AUTHDOMAIN,
  databaseURL: process.env.REACT_APP_DATABASEURL,
  projectId: process.env.REACT_APP_PROJECTID,
  storageBucket: process.env.REACT_APP_STORAGEBUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID,
  appId: process.env.REACT_APP_APPID,
  measurementId: process.env.REACT_APP_MEASUREMENTID
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore();
export const storage = getStorage();



// agregar nuevo elemento a la base de firebase
export async function insertNewLink(link) {
  try {
    const docRef = collection(db, 'links');
    const res = await addDoc(docRef, link);
    return res;
  } catch (error) {
    console.error(error);
  }
}


// obtener los datos de la tabla
export async function getLinks() {
  const links = []
  try {
    const collectioRef = collection(db, 'links')
    const querySnapshot = await getDocs(collectioRef)
    querySnapshot.forEach((doc) => {
      const link = { ...doc.data() }
      link.docId = doc.id
      links.push(link)
    })
    return links
  } catch (error) {
    console.error(error)
  }
}
