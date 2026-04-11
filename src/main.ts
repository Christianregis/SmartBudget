import PersistedState from 'pinia-plugin-persistedstate';
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import './assets/styles.css'
import { useBudgetStore } from './stores/budgetStore'


const app = createApp(App)
const pinia = createPinia()

pinia.use(PersistedState)
app.use(router)
app.use(pinia)

app.mount('#app')
const budgetStore = useBudgetStore()

budgetStore.transactions
