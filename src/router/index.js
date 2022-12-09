import { createRouter, createWebHistory } from "vue-router";
import Home from "../components/Home.vue";
import About from "../components/About.vue";
import Skill from "../components/Skill.vue";
import Works from "../components/Works.vue";

const routes = [
  {
    path: "/",
    name: "HOME",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/skill",
    name: "skill",
    component: Skill,
  },
  {
    path: "/Works",
    name: "works",
    component: Works,
  },
];

const router = createRouter({
  history: createWebHistory('https://yo-portfolio-site.firebaseapp.com/'),
  routes,
});

export default router;
