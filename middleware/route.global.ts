// middleware/route.global.ts
export default defineNuxtRouteMiddleware((to, from) => {
    if (to.path === '/') {
      return navigateTo('/app')
    }
  })