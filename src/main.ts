import Vue from 'vue'
import App from './App.vue'
import Home from '@/components/HomePage.vue'
import Recipes from '@/components/Recipes.vue'
import Profile from '@/components/Profile.vue'
import VueRouter, {RouteConfig} from 'vue-router';


Vue.use(VueRouter);

const routesArr: Array<RouteConfig> = [
  {name: "My Home", path: "/", component: Home},
  {name: "My Recipes", path: "/recipes", component: Recipes},
  {name: "My Profile", path: "/profile", component: Profile},
];

const myRouter = new VueRouter({
  routes: routesArr,
  mode: 'history',
});

Vue.config.productionTip = false

new Vue({
  router: myRouter,
  render: h => h(App),
}).$mount('#app')
