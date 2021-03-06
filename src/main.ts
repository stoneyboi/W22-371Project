import Vue from 'vue'
import App from './App.vue'
import Home from '@/components/HomePage.vue'
import Recipes from '@/components/Recipes.vue'
import Profile from '@/components/Profile.vue'
import Login from '@/components/Login.vue'
import FireRecipes from '@/components/FireRecipes.vue'
import RecipeEdit from '@/components/RecipeEdit.vue'
import RecipeCreate from '@/components/RecipeCreate.vue'
import RecipeList from '@/components/RecipeList.vue'
import VueRouter, {RouteConfig} from 'vue-router'
import 'bootstrap/dist/css/bootstrap.min.css'
import Entry from '@/components/entry.vue'

import {initializeApp, FirebaseApp} from "firebase/app";
import {getFirestore, Firestore} from "firebase/firestore";


Vue.use(VueRouter);

const routesArr: Array<RouteConfig> = [
  {name: "My Home", path: "/home", component: Home},
  {name: "My Recipes", path: "/recipes", component: Recipes},
  {name: "My Profile", path: "/profile", component: Profile},
  {name: "Login", path: "/login", component: Login},
  {name: "edit", path: "/edit/:id", component: RecipeEdit},
  {name: "create", path: "/create", component: RecipeCreate},
  {name: "list", path: "/list", component: RecipeList},
  {name: "Entry", path: "/", component: Entry},
];

const myRouter = new VueRouter({
  routes: routesArr,
  base: process.env.BASE_URL,
  mode: 'history',
});

Vue.config.productionTip = false

new Vue({
  router: myRouter,
  render: h => h(App),
}).$mount('#app')
