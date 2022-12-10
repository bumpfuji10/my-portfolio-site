import { createRouter, createWebHistory } from "vue-router";
import Home from "../components/Home.vue";
import about from "../components/about.vue";
import skill from "../components/skill.vue";
import portfolio from "../components/portfolio.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/about",
    name: "about",
    component: about,
  },
  {
    path: "/skill",
    name: "skill",
    component: skill,
  },
  {
    path: "/portfolio",
    name: "portfolio",
    component: portfolio,
  },
];

const router = createRouter({
  history: createWebHistory('https://yo-portfolio-site.firebaseapp.com/'),
  routes,
});

export default router;
