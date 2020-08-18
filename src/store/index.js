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
			quantidadePontos: 0
		},
		usuariosCadastrados: [
			{
				nome: "Teste",
				cpf: "",
				senha: "teste",
				email: "teste@gmail.com",
				telefone: "",
				celular: "",
				endereco: {
					rua: "Rua Almirante Barroso",
					numero: "99",
					cep: "98789-899",
					bairro: "Verde",
					cidade: "São Paulo",
					estado: "São Paulo"
				},
				quantidadePontos: 0
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

		getPontosAtuais(state) {
			return state.dadosUsuario.quantidadePontos
		},

		getEndereco(state) {
			return state.dadosUsuario.endereco
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

		setAdicionarPontos(state, pontos) {
			state.dadosUsuario.quantidadePontos = (parseFloat(state.dadosUsuario.quantidadePontos) + parseFloat(pontos)).toFixed(2);
			state.usuariosCadastrados.map(usuario => {
				if (state.dadosUsuario.email == usuario.email) {
					usuario.quantidadePontos = (parseFloat(usuario.quantidadePontos) + parseFloat(pontos)).toFixed(2);
				}
			})
		},

		setDiminuirPontos(state, pontos) {
			console.log((parseFloat(state.dadosUsuario.quantidadePontos) - parseFloat(pontos)).toFixed(2));
			state.dadosUsuario.quantidadePontos = (parseFloat(state.dadosUsuario.quantidadePontos) - parseFloat(pontos)).toFixed(2);
			state.usuariosCadastrados.map(usuario => {
				if (state.dadosUsuario.email == usuario.email) {
					usuario.quantidadePontos = (parseFloat(usuario.quantidadePontos) - parseFloat(pontos)).toFixed(2);
				}
			})
		},

		setEndereco(state, objEndereco) {
			state.dadosUsuario.endereco = { ...objEndereco}
			state.usuariosCadastrados.map(usuario => {
				if (state.dadosUsuario.email == usuario.email) {
					usuario.endereco = { ...objEndereco }
				}
			})
		}
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

		setAdicionarPontos({ commit }, payload) {
			commit('setAdicionarPontos', payload)
		},

		setDiminuirPontos({ commit }, payload) {
			commit('setDiminuirPontos', payload)
		},

		setEndereco({ commit }, payload) {
			commit('setEndereco', payload)
		},

		deleteItemCarrinho({ commit }, payload) {
			commit('deleteItemCarrinho', payload)
		},
	}
})
