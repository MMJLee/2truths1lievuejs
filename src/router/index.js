import { createRouter, createWebHashHistory } from "vue-router";
import AboutView from "../views/AboutView.vue";
import ProjectView from "../views/ProjectView.vue";
import StatementDetails from "../views/StatementDetails.vue";
import TwoTruthsOneLieView from "../views/TwoTruthsOneLieView.vue";

const history = createWebHashHistory();
const routes = [

  {
    path: "/statements/:id",
    name: "StatementDetails",
    props: true,
    component: StatementDetails,
  },
  {
    path: "/2truths1lie",
    name: "TwoTruthsOneLieView",
    component: TwoTruthsOneLieView,
  },
  {
    path: "/projects",
    name: "ProjectView",
    component: ProjectView,
  },
  {
    path: "/",
    name: "AboutView",
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