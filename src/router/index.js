import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/components/Home'
import FinalizarPedido from '@/components/FinalizarPedido'
import Login from '@/components/Login'
import CadastroUsuario from '@/components/CadastroUsuario'
import * as getStore from '@/store/getDadosStore'

Vue.use(VueRouter)

    const routes = [
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/search/:search',
            name: 'Search',
            component: Home,
            props: true
        },
        {
            path: '/categoria/:categoria',
            name: 'Categoria',
            component: Home,
            props: true
        },
        {
            path: '/finalizarPedido/',
            name: 'FinalizarPedido',
            component: FinalizarPedido,
            beforeEnter: (to, from, next) => {

                if (getStore.getIsLogado()) {

                    if (getStore.getQuantidadeItens() == 0) {
                        next({ name: 'Home' })
                        return
                    }

                    next()
                    return
                }

                next({ name: 'Login' })
                getStore.setFinalizandoPedido(true)
            },
        },
        {
            path: '/Login/',
            name: 'Login',
            component: Login
        },
        {
            path: '/Cadastro/',
            name: 'CadastroUsuario',
            component: CadastroUsuario
        },

    ]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
