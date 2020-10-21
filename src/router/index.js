import Vue from "vue";
import Router from "vue-router";
import Analytics from "../routes/Analytics";
import Business from "../routes/Business";
import Design from "../routes/Design";
import Engineering from "../routes/Engineering";
import Hr from "../routes/Hr";
import Operations from "../routes/Operations";
import SpecialOps from "../routes/SpecialOps";

Vue.use(Router);

export const routes = [
  {
    path: "/",
    name: "Analytics",
    component: Analytics
  },
  {
    path: "/Business",
    name: "Business",
    component: Business
  },
  {
    path: "/Design",
    name: "Design",
    component: Design
  },
  {
    path: "/Engineering",
    name: "Engineering",
    component: Engineering
  },
  {
    path: "/HR",
    name: "HR",
    component: Hr
  },
  {
    path: "/Operations",
    name: "Operations",
    component: Operations
  },
  {
    path: "/SpecialOps",
    name: "SpecialOps",
    component: SpecialOps
  }
];

export default new Router({ routes });
