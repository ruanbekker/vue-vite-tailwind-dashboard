import { createRouter, createWebHistory } from "vue-router";
import Dashboard from "./views/Dashboard.vue";
import Wallets from "./views/Wallets.vue";
import Settings from "./views/Settings.vue";

const routes = [
  { path: "/", component: Dashboard },
  { path: "/wallets", component: Wallets },
  { path: "/settings", component: Settings },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

