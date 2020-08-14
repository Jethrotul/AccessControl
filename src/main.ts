import Vue from 'vue'
import App from './App.vue'
import firebase from 'firebase';

Vue.config.productionTip = false

const firebaseConfig = {
  apiKey: "AIzaSyByTQqFM2t8jdhuBzoAxz8l_zsGS9Om-pE",
  authDomain: "accesscontrolvue.firebaseapp.com",
  databaseURL: "https://accesscontrolvue.firebaseio.com",
  projectId: "accesscontrolvue",
  storageBucket: "accesscontrolvue.appspot.com",
  messagingSenderId: "1095584234295",
  appId: "1:1095584234295:web:6267490a80ed5f1993f8b2"
};
firebase.initializeApp(firebaseConfig);

new Vue({
  render: h => h(App),
}).$mount('#app')
