// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDcsNoiocTxg6XK_FjPwIlsmeGpkVRwI08",
    authDomain: "punto-de-venta-react-firebase.firebaseapp.com",
    projectId: "punto-de-venta-react-firebase",
    storageBucket: "punto-de-venta-react-firebase.appspot.com",
    messagingSenderId: "51877771821",
    appId: "1:51877771821:web:f67e94f44f2e76653a16a4"
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);

export default appFirebase