import { createRouter, createWebHistory } from 'vue-router'
import authRoutes from "./routes/authRoutes";
import dashboardRoute from "./routes/dashboardRoute";

const baseRoute = []

const routes = baseRoute.concat(authRoutes,dashboardRoute)

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior() {
    // always scroll to top
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({left: 0, top: 0})
      }, 100)
    })
  }
})

router.beforeEach(async (routeTo, routeFrom, next) => {
  // Check if auth is required on this route
  // Check if auth is required on this route
  // (including nested router).
  const authRequired = routeTo.matched.some(route => route.meta.authRequired);

  // console.log("Token b4: ",store.getters["getToken"])

  // If auth isn't required for the route, just continue.
  if (!authRequired) return next();
  // console.log("userManagement getter info: "+StoreUtils.rootGetters(StoreUtils.getters.auth.getUserInfo))
  if (localStorage.token != null){
    return next()
  }
  redirectToLogin();
  // eslint-disable-next-line no-unused-vars
  function redirectToLogin() {
    next({ name: "Login", query: { redirectFrom: routeTo.fullPath } });

    return
  }
});

router.beforeResolve(async (routeTo, routeFrom, next) => {
  // Create a `beforeResolve` hook, which fires whenever
  // `beforeRouteEnter` and `beforeRouteUpdate` would. This
  // allows us to ensure data is fetched even when params change,
  // but the resolved route does not. We put it in `meta` to
  // indicate that it's a hook we created, rather than part of
  // Vue Router (yet?).
  try {
    // For each matched route...
    for (const route of routeTo.matched) {
      await new Promise((resolve, reject) => {
        // If a `beforeResolve` hook is defined, call it with
        // the same arguments as the `beforeEnter` hook.
        if (route.meta && route.meta.beforeResolve) {
          route.meta.beforeResolve(routeTo, routeFrom, (...args) => {
            // If the userManagement chose to redirect...
            if (args.length) {
              // If redirecting to the same route we're coming from...
              // Complete the redirect.
              next(...args);
              reject(new Error("Redirected"));
            } else {
              resolve();
            }
          });
        } else {
          // Otherwise, continue resolving the route.
          resolve();
        }
      });
    }
    // If a `beforeResolve` hook chose to redirect, just return.
  } catch (error) {
    return;
  }

  // If we reach this point, continue resolving the route.
  next();
});

router.afterEach(() => {

});


export default router
