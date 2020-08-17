<template>
    <div>
        <!-- Header -->
	<header class="header shop">
		<!-- Topbar -->
		<div class="topbar">
			<div class="container">
				<div class="row">
					<div class="col-lg-4 col-md-12 col-12">
					</div>
					<div class="col-lg-8 col-md-12 col-12">
						<!-- Top Right -->
						<div class="right-content">
							<ul class="list-main" v-if="getIsLogado">
								<li><i class="ti-medall"></i> <a href="">{{getPontos}} pontos</a></li>
								<li><i class="ti-layers-alt"></i> <a href="">Meus Pedidos</a></li>
								<li><i class="ti-user"></i> <a href="">Minha Conta</a></li>
								<li><i class="ti-power-off"></i><a href="" @click="sair()">Sair</a></li>
							</ul>

							<ul class="list-main" v-if="!getIsLogado">
								<li><i class="ti-control-record"></i><a href="" @click="irPara('Login')">Login</a></li>
								<li><i class="fa fa-user-circle-o"></i><a href="" @click="irPara('CadastroUsuario')">Cadastrar-se</a></li>
							</ul>
						</div>
						<!-- End Top Right -->
					</div>
				</div>
			</div>
		</div>
		<!-- End Topbar -->
		<div class="middle-inner">
			<div class="container">
				<div class="row">
					<div class="col-lg-2 col-md-2 col-12">
						<!-- Logo -->
						<div class="logo">
							<a href=""><img style="width:100px" src="images/TavernaGamer.png" alt="logo"></a>
						</div>
						<!--/ End Logo -->
						<!-- Search Form -->
						<div class="search-top">
							<div class="top-search"><a href=""><i class="ti-search"></i></a></div>
							<!-- Search Form -->
							<div class="search-top">
								<form class="search-form">
									<input @keypress.enter="buscar()" v-model="search" type="text" placeholder="Estou buscando por...." name="search">
									<button @click="buscar()" value="search" type="button"><i class="ti-search"></i></button>
								</form>
							</div>
							<!--/ End Search Form -->
						</div>
						<!--/ End Search Form -->
						<div class="mobile-nav"></div>
					</div>
					<div class="col-lg-8 col-md-7 col-12">
						<div class="search-bar-top">
							<div class="search-bar">
								<form>
									<input @keypress.enter="buscar()" v-model="search" name="search" placeholder="Estou buscando por..." type="search">
									<button @click="buscar()" class="btnn"><i class="ti-search"></i></button>
								</form>
							</div>
						</div>
					</div>
					<div class="col-lg-2 col-md-3 col-12">
						<div class="right-bar">
							<!-- Search Form -->
							<div class="sinlge-bar">
								<a href="#" class="single-icon"><i class="fa fa-heart-o" aria-hidden="true"></i></a>
							</div>
							<Carrinho/>
						</div>
					</div>
				</div>
			</div>
		</div>

		<!-- Header Inner -->
		<div class="header-inner" v-show="getMostrarMenu">
			<div class="container">
				<div class="cat-nav-head">
					<div class="row">
						<div class="col-12">
							<div class="menu-area">
								<!-- Main Menu -->
								<nav class="navbar navbar-expand-lg">
									<div class="navbar-collapse">	
										<div class="nav-inner">	
											<ul class="nav main-menu menu navbar-nav">
												<li><a style="cursor: pointer" @click="irParaCategoria('Produtos')">Produtos</a></li>
												<li><a style="cursor: pointer" @click="irParaCategoria('Playstation')">Playstation</a></li>													
												<li><a style="cursor: pointer" @click="irParaCategoria('Xbox')">Xbox</a></li>
												<li><a style="cursor: pointer" @click="irParaCategoria('PC/Mobile')">Jogos PC/ Mobile</a></li>
												<li><a style="cursor: pointer">Contato</a></li>
											</ul>
										</div>
									</div>
								</nav>
								<!--/ End Main Menu -->	
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<!--/ End Header Inner -->

	</header>
	<!--/ End Header -->
    </div>
</template>

<script>

import { mapGetters, mapActions } from 'vuex'
import Carrinho from '@/components/Carrinho'
export default {

	data:() => ({
		search: '',
	}),

	components: {
		Carrinho
	},

	computed: {
		...mapGetters(['getIsLogado', 'getMostrarMenu', 'getDadosUsuario']),

		getPontos() {
			return this.getIsLogado ? this.getDadosUsuario.quantidadePontos : 0;
		},
	},

	methods: {

		...mapActions(['setIsLogado']),

		irParaCategoria(categoria) {
			this.$router.push({
                name: 'Categoria',
                params: {
                    categoria
                }
            })
		},

		buscar() {
			this.$router.push({
				name: 'Search',
				params: {
                    search: this.search
                }
            })
		},

		irPara(tela) {
			this.$router.push({
                name: tela
            })
		},

		sair() {
			this.setIsLogado(false)
			this.$router.push({
                name: 'Home'
            })
		}
	}
}
</script>