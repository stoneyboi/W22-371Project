import Vue from "vue";
import HomePage	from "../components/HomePage.vue"
import Login from "../components/Login.vue";
import Profile from "./components/Profile.vue"
import VueRouter, { RouteConfig } from "vue-router";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
	{
		path: "/",
		name: "login",
		component: Login,
	},
	{
		path: "/home/:byWayOf",
		name: "home",
		props: true,
		component: HomePage
	},
];

const router = new VueRouter({
	mode: "history",
	base: process.env.BASE_URL,
	routes,
});

export default router;
