import { ComputedRef, Ref } from 'vue'
export type LayoutKey = "auth" | "default" | "home"
declare module "C:/xampp/htdocs/nuxt_apk_workpro/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: false | LayoutKey | Ref<LayoutKey> | ComputedRef<LayoutKey>
  }
}