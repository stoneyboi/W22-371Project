import Vue from 'vue'
import App from './App.vue'
import Home from '@/components/HomePage.vue'
import Recipes from '@/components/Recipes.vue'
import Profile from '@/components/Profile.vue'
import Login from '@/components/Login.vue'
import Entry from '@/components/entry.vue'
import {initializeApp, FirebaseApp} from "firebase/app";
import {getFirestore, Firestore} from "firebase/firestore";
import VueRouter, {RouteConfig} from 'vue-router';


Vue.use(VueRouter);

const routesArr: Array<RouteConfig> = [
  {name: "Entry", path: "/", component: Entry},
  {name: "My Home", path: "/home", component: Home},
  {name: "My Recipes", path: "/recipes", component: Recipes},
  {name: "My Profile", path: "/profile", component: Profile},
  {name: "Login", path: "/login", component: Login},
];

const myRouter = new VueRouter({
  routes: routesArr,
  mode: 'history',
});

const config = { 
  apiKey: "AIzaSyCFfkAJjdNRe6OwbPBZEZy7J-kNnJVC3Fg",
  authDomain: "travis-test-90fb2.firebaseapp.com",
  databaseURL: "https://travis-test-90fb2-default-rtdb.firebaseio.com",
  projectId: "travis-test-90fb2",
  storageBucket: "travis-test-90fb2.appspot.com",
  messagingSenderId: "626117308687",
  appId: "1:626117308687:web:e98da2f8e0e64aacc68e7a"
};

const myapp: FirebaseApp = initializeApp(config);
export const db:Firestore = getFirestore(myapp);

Vue.config.productionTip = false

new Vue({
  router: myRouter,
  render: h => h(App),
}).$mount('#app')
