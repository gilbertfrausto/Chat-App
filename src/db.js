import firebase from "firebase/app";
import "firebase/firestore";

// Initialize Cloud Firestore through Firebase
firebase.initializeApp({
  // No 'secret' variables in non containers instances, so hard coding dev key
  apiKey: "AIzaSyCzHoQ072rcjizt3nSr19NbagFdmPGnacQ",
  // apiKey: "AIzaSyAw1B8VIryG9lOceWvXSfpZYDZifI_9elM",
  // projectId: "dash-70ca9"
  projectId: "radiant-torch-1024"
});

export const db = firebase.firestore();
