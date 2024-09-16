import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCzqMUNxQUdfPrljhaxMACNKdOkrZ0JmBA",
  authDomain: "foodapp-860ba.firebaseapp.com",
  projectId: "foodapp-860ba",
  storageBucket: "foodapp-860ba.appspot.com",
  messagingSenderId: "715052353085",
  appId: "1:715052353085:web:863c84d3291b55d08ccc54",
  measurementId: "G-2L92JJKJP9",
  databaseURL: "https://foodapp-860ba-default-rtdb.firebaseio.com/"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);