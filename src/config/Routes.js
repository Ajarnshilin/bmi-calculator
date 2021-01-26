import { lazy } from "react";

export default {
  Home: {
    path: "/",
    exact: true,
    component: lazy(() => import("../pages/Home"))
  },
  Result: {
    path: "/result",
    exact: true,
    component: lazy(() => import("../pages/ResultPage"))
  }
};
