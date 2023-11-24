import { initializeApp } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-storage.js";

const firebaseConfig = {
	apiKey: "AIzaSyCgI5SIHrb3BiAa54jLRDNGitum4K1Hths",
	authDomain: "crescent-institute.firebaseapp.com",
	projectId: "crescent-institute",
	storageBucket: "crescent-institute.appspot.com",
	messagingSenderId: "225030321697",
	appId: "1:225030321697:web:6afeea4e23f58bbd529560",
	measurementId: "G-L4PWHTL83R"
  };

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
const firestore = getFirestore(app);

export { app, firestore, storage };
