import { createRouter, createWebHashHistory } from "vue-router";
import GameView from "../views/GameView.vue";
import AboutView from "../views/AboutView.vue";
import StatementDetails from "../views/StatementDetails.vue";

const history = createWebHashHistory();
const routes = [

  {
    path: "/statements/:id",
    name: "StatementDetails",
    props: true,
    component: StatementDetails,
  },
  {
    path: "/game",
    name: "GameView",
    component: GameView,
  },
  {
    path: "/",
    name: "About",
    component: AboutView,
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () =>
    //   import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
];

const router = createRouter({
  history: history,
  routes: routes,
})

export default router;