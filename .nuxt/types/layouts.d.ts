import { ComputedRef, Ref } from 'vue'
export type LayoutKey = "default" | "home"
declare module "C:/xampp/htdocs/nuxt_apk_workpro/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: false | LayoutKey | Ref<LayoutKey> | ComputedRef<LayoutKey>
  }
}