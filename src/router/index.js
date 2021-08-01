import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "",
    redirect:'/home'
  },
  {
    path: "/home",
    name: "home",
    component: () =>
      import("@/views/home/home.vue"),
  },
  {
    path: "/fenlei",
    name: "fenlei",
    component: () =>
      import("@/views/fenlei/fenlei.vue"),
  },
  {
    path: "/cart",
    name: "cart",
    component: () =>
      import("@/views/cart/cart.vue"),
  },
  {
    path: "/mine",
    name: "mine",
    component: () =>
      import("@/views/mine/mine.vue"),
  },
  // {
  //   path: "/about",
  //   name: "About",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/About.vue"),
  // },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
