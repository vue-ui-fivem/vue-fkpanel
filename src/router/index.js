import { createRouter, createWebHashHistory } from 'vue-router'
import Employee from '../components/Employee/Employee.vue'
import Storage from '../components/Storage/Storage.vue'
import Cars from '../components/Cars/Cars.vue'
import Settings from '../components/Settings/Settings.vue'

const routes = [
    { path: '/*', name: 'Alakalmazottak', component: Employee },
    { path: '/employee', name: 'Alakalmazottak', component: Employee },
    { path: '/storage', name: 'Raktár', component: Storage },
    { path: '/cars', name: 'Autók', component: Cars },
    { path: '/settings', name: 'Beállítások', component: Settings },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})


router.beforeEach((to,from,next) => {
    if (to.path == '/settings' || to.path == '/cars' || to.path == '/storage' || to.path == '/employee') {
        next()
    } else {
        next('/employee')
    }
})

export default router
