import store from '@/store/index'

export const getIsLogado = () => store.getters["getIsLogado"]
export const getIsFinalizarPedido = () => store.getters["getIsFinalizarPedido"]
export const setFinalizandoPedido = isFinalizar => store.dispatch(('setFinalizandoPedido'), isFinalizar)
export const getQuantidadeItens = () => store.getters["getQuantidadeItens"]