import type { NavigationGuard } from 'vue-router'
export type MiddlewareKey = string
declare module "C:/xampp/htdocs/nuxt_workpro/nuxt_apk_workpro/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    middleware?: MiddlewareKey | NavigationGuard | Array<MiddlewareKey | NavigationGuard>
  }
}