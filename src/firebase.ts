import {initializeApp} from 'firebase';

const app = initializeApp({
    apiKey: "AIzaSyByTQqFM2t8jdhuBzoAxz8l_zsGS9Om-pE",
    authDomain: "accesscontrolvue.firebaseapp.com",
    databaseURL: "https://accesscontrolvue.firebaseio.com",
    projectId: "accesscontrolvue",
    storageBucket: "accesscontrolvue.appspot.com",
    messagingSenderId: "1095584234295",
    appId: "1:1095584234295:web:6267490a80ed5f1993f8b2"
  });
  
export const db = app.database();
export const nameRef = db.ref('names');