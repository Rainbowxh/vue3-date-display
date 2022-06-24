import { App, Plugin } from "vue";

import Helloworld from "./src/index.vue"

export const HelloworldPlugin: Plugin = {
    install(app: App) {
        app.component('Helloworld',Helloworld)
    }
}
export { Helloworld }