import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../components/operation-rubric/OperationList.vue"),
  },
  {
    path: "/case/:slug",
    name: "CasePage",
    component: () => import("../components/case-page/CasePage.vue"),
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
