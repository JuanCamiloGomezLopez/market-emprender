import { initializeApp } from "firebase/app";

import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  FacebookAuthProvider,
} from "firebase/auth";

import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
  writeBatch,
  query,
  getDocs,
  updateDoc,
  addDoc,
  deleteDoc,  
  deleteField
  
  
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAUlvjjYQ-Q9dlYbqcFORLOR45kWhW2I5c",
  authDomain: "emprender-1ca1f.firebaseapp.com",
  projectId: "emprender-1ca1f",
  storageBucket: "emprender-1ca1f.appspot.com",
  messagingSenderId: "102880683644",
  appId: "1:102880683644:web:fdff9f2310e6add04dcbf9",
};

const firebaseApp = initializeApp(firebaseConfig);

/*crear usuarios con Google*/

const provider = new GoogleAuthProvider();

const providerface = new FacebookAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

providerface.setCustomParameters({
  prompt: "popup",
});

export const auth = getAuth();

export const sigInwithGooglePopup = () => signInWithPopup(auth, provider);

export const sigInwithFacebookPopup = () => signInWithPopup(auth, providerface);
/* base de datos*/

export const db = getFirestore();

//#region
/* Creamos una nueva coleccion dentro de firebase sirve para ingresar todo un stock completo a la base de datos*/
export const addCollectionandDocuments = async (
  collectionkey,
  objectsToAdd
) => {
  const collectionRef = collection(db, collectionkey);
  const batch = writeBatch(db);
  objectsToAdd.forEach((object) => {
    const docRef = doc(collectionRef, object.title);
    batch.set(docRef, object);
  });
  await batch.commit();
};

/* el siguiente efecto se deberá agregar en el componente de contexto de sus productos o en su defecto en la variable
que almacena los productos. en nuestro caso SHOP_DATA es el array de productos que queremos subir a firebase

  useEffect(()=>{
    addCollectionandDocuments("categories", SHOP_DATA )
  },[])

*/
//#endregion

//#region
/*ahora que ya subimos todos los productos a firebase mediante la coleccion categories vamos a recperar todos esos datos en nuestro productcontext*/

export const getCategoriesAndDocuments = async () => {
  const collectionRef = collection(db, "preventa_01");
  const q = query(collectionRef);
  const querySnapshot = await getDocs(q);
  return querySnapshot.docs.map((docSnapshot) => docSnapshot.data());
};

export const getlistemprendedoresAndDocuments = async () => {
  const collectionRef = collection(db, "list_emprendedores");
  const q = query(collectionRef);
  const querySnapshot = await getDocs(q);
  return querySnapshot.docs.map((docSnapshot) => docSnapshot.data());
};

export const getlisproducttiendaAndDocuments = async () => {
  const collectionRef = collection(db, "product_tienda");
  const q = query(collectionRef);
  const querySnapshot = await getDocs(q);
  return querySnapshot.docs.map((docSnapshot) => docSnapshot.data());
};

export const getlisUserAndDocuments = async () => {
  const collectionRef = collection(db, "users");
  const q = query(collectionRef);
  const querySnapshot = await getDocs(q);
  return querySnapshot.docs.map((docSnapshot) => docSnapshot.data());
};

//#endregion

/* Creamos un documento dentro de la coleccion users users para todos los usuarios logeados*/
export const createUserDocumentFromAuth = async (
  userAuth,
  aditionalInformation = {}
) => {
  const userDocref = doc(db, "users", userAuth.uid);
  const userSnapshot = await getDoc(userDocref);

  if (!userSnapshot.exists()) {
    const { displayName, email, uid } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocref, {
        displayName,
        email,
        uid,
        createdAt,
        ...aditionalInformation,
      });
    } catch (error) {
      console.log("error creating the user", error.message);
    }
  }
  return userDocref;
};

/* agrega los productos favoritos a cada usuario registrado */

export const handleEdit = async (preventa_item, useruid) => {  
  await updateDoc( doc(db, "users", useruid), {[`${preventa_item.producto}`]: preventa_item});
};

/* borra los productos favoritos a cada usuario registrado */

export const deletefavorite = async (preventa_item, useruid) => {
  const data = {
    [`${preventa_item.producto}`]: deleteField()
  }
  await updateDoc( doc(db, "users", useruid), data);
};

/*crear usuarios con usuario y contraseña*/

export const createUserWithEmailAndPassword1 = async (email, password) => {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
};

/*Logear usuarios registrados para ingresar a la app*/

export const signInWithEmailAndPassword1 = async (email, password) => {
  if (!email || !password) return;

  return await signInWithEmailAndPassword(auth, email, password);
};

/*cerrar la sección de un usuario*/

export const sigOutUser = async () => await signOut(auth);

/*programar un oyente de firebae que nos dice si el usuario se authentico o cerro sesión sin necesidad de repetir tanto codigo*/

export const onAuthStateChangedListener = (callback) =>
  onAuthStateChanged(auth, callback);
