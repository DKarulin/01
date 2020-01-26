import Vue from "vue";
import VueRouter from "vue-router";

import Home from "@/views/Home.vue";
import About from "@/views/About.vue";
import UsersList from "@/views/Users.vue";
import UserEdit from "@/views/UserEdit.vue"

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/about",
    name: "about",
    component: About
  },
  {
    path:"/users",
    component: UsersList
  },
  {
    path:"/edit/:id",
    component: UserEdit
  }
];

const router = new VueRouter({
  routes,
  mode: "history"
});

export default router;
