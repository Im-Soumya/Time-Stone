import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyCF8qThNAGcDQXtkVaw0VkYkg4nGJllZL4",
    authDomain: "time-stone-e8bd0.firebaseapp.com",
    projectId: "time-stone-e8bd0",
    storageBucket: "time-stone-e8bd0.appspot.com",
    messagingSenderId: "83520877158",
    appId: "1:83520877158:web:0be8ebba60992d6b30f3a7"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

const provider = new GoogleAuthProvider()

export { auth, provider }