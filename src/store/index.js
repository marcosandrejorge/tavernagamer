import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		isLogado: false,
		dadosUsuario: {
			nome: "",
			cpf: "",
			senha: "",
			email: "",
			telefone: "",
			celular: "",
			endereco: {
				rua: "",
				numero: "",
				cep: "",
				bairro: "",
				cidade: "",
				estado: ""
			},
			quantidadePontos: 100
		},
		usuariosCadastrados: [
			{
				nome: "Marcos André Jorge",
				cpf: "",
				senha: "123",
				email: "marcosandrejorge@gmail.com",
				telefone: "",
				celular: "",
				endereco: {
					rua: "",
					numero: "",
					cep: "",
					bairro: "",
					cidade: "",
					estado: ""
				},
				quantidadePontos: 100
			}
		],
		mostrarMenu: true,
		arrItensCarrinho: [],
		isFinalizandoPedido: false,
	},

	getters: {
		getIsLogado(state) {
			return state.isLogado
		},

		getMostrarMenu(state) {
			return state.mostrarMenu
		},

		getItensCarrinho(state) {
			return state.arrItensCarrinho
		},

		getValorTotalCarrinho(state){
			let total = 0;
			state.arrItensCarrinho.map(item => {
				total = total + item.valorTotal;
			});

			return total;
		},

		getQuantidadeItens(state) {
			return state.arrItensCarrinho.length
		},

		getIsFinalizarPedido(state) {
			return state.isFinalizandoPedido
		},

		getDadosUsuario(state) {
			return state.dadosUsuario
		},

		getUsuariosCadastrados(state) {
			return state.usuariosCadastrados
		},
	},
  
	mutations: {
		setIsLogado(state, isLogado) {
			state.isLogado = isLogado
		},

		setMostrarMenu(state, mostrarMenu) {
			state.mostrarMenu = mostrarMenu
		},

		setItensCarrinho(state, arrItensCarrinho) {
			state.arrItensCarrinho = [...arrItensCarrinho]
		},

		setAdicionarUmItemCarrinho(state, item) {
			state.arrItensCarrinho.push(item);
		},

		setFinalizandoPedido(state, isFinalizandoPedido) {
			state.isFinalizandoPedido = isFinalizandoPedido
		},

		deleteItemCarrinho(state, index) {
			state.arrItensCarrinho.splice(index, 1);
		},

		setCadastrarUsuario(state, usuario) {
			state.usuariosCadastrados.push(usuario);
			state.dadosUsuario = { ...usuario }
			state.isLogado = true
		},

		setLogar(state, usuario) {
			state.dadosUsuario = { ...usuario }
			state.isLogado = true
		},
	},

	actions: {
		setIsLogado({ commit }, payload) {
			commit('setIsLogado', payload)
		},

		setMostrarMenu({ commit }, payload) {
			commit('setMostrarMenu', payload)
		},

		setItensCarrinho({ commit }, payload) {
			commit('setItensCarrinho', payload)
		},

		setAdicionarUmItemCarrinho({ commit }, payload) {
			commit('setAdicionarUmItemCarrinho', payload)
		},

		setFinalizandoPedido({ commit }, payload) {
			commit('setFinalizandoPedido', payload)
		},

		setCadastrarUsuario({ commit }, payload) {
			commit('setCadastrarUsuario', payload)
		},

		setLogar({ commit }, payload) {
			commit('setLogar', payload)
		},

		deleteItemCarrinho({ commit }, payload) {
			commit('deleteItemCarrinho', payload)
		},
	}
})
