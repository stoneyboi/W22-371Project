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


Vue.use(VueRouter);

const routesArr: Array<RouteConfig> = [
  {name: "My Home", path: "/", component: Home},
  {name: "My Recipes", path: "/recipes", component: Recipes},
  {name: "My Profile", path: "/profile", component: Profile},
  {name: "Login", path: "/login", component: Login},
  {name: "Fire Recipes", path: "/fire", component: FireRecipes},
  {name: "edit", path: "/edit/:id", component: RecipeEdit},
  {name: "create", path: "/create", component: RecipeCreate},
  {name: "list", path: "/list", component: RecipeList},
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
