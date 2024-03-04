import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";

const initializeAuthintication = () => {
    initializeApp(firebaseConfig);
}

export default initializeAuthintication;