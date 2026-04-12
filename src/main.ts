import PersistedState from 'pinia-plugin-persistedstate';
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import './assets/styles.css'

const app = createApp(App)
const pinia = createPinia()

//  Utilisation du plugin pinia-plugin-PersistState pour la gestion automatique des donnees ( Ca evite de gerer manuellement les donnees)
pinia.use(PersistedState)
app.use(router)
app.use(pinia)

app.mount('#app')

