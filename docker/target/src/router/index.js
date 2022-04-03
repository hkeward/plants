import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import PlantList from "../views/PlantList.vue";
import Plant from "../views/Plant.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/plants",
    name: "plant_list",
    component: PlantList,
  },
  {
    path: "/plants/:plantName",
    name: "plant",
    component: Plant,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
