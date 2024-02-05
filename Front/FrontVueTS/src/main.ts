import { createApp, App } from 'vue'
import './style.css'
import MainApp from './MainApp.vue'
import store from "./config/store/pinia"
import vuetify from "./config/plugins/vuetify"
import router from "./config/router/vue-router"
//import services from "./config/services/axios"

const app: App = createApp(MainApp)
//const app: App = createApp({})

app.use(store)
app.use(vuetify)
app.use(router)
//app.use(services) // create a callstack problem with axios


app.mount('#app')

export default app