<template>
    <div class="container">
        <div class="row">
			<div class="col-md-5 mx-auto">
                <div id="second">
                    <div class="myform form ">
                        <div class="logo mb-3">
                            <div class="col-md-12 text-center">
                                <h1 >Cadastre-se</h1>
                            </div>
                        </div>
                        <form name="registration">
                            <div class="form-group">
                                <label for="nome_completo">Nome completo</label>
                                <input v-model="nome"  type="text"  name="nome_completo" class="form-control" id="nome_completo" aria-describedby="emailHelp" placeholder="Digite seu nome">
                            </div>
                            <div class="form-group">
                                <label for="cpf">CPF</label>
                                <input type="text" v-model="cpf" name="cpf" class="form-control" id="cpf" aria-describedby="emailHelp" placeholder="Digite seu cpf">
                            </div>
                            <div class="form-group">
                                <label for="Email">Email</label>
                                <input type="text" v-model="email" name="Email" class="form-control" id="Email" aria-describedby="emailHelp" placeholder="Digite seu email">
                            </div>
                            <div class="form-group">
                                <label for="telefone">Telefone</label>
                                <input type="text" v-model="telefone" name="telefone" class="form-control" id="telefone" aria-describedby="emailHelp" placeholder="Digite seu telefone">
                            </div>
                            <div class="form-group">
                                <label for="celular">Celular</label>
                                <input type="text" v-model="celular" name="celular" class="form-control" id="celular" aria-describedby="emailHelp" placeholder="Digite seu celular">
                            </div>
                            <div class="form-group">
                                <label for="senha">Senha</label>
                                <input type="password" v-model="senha" name="senha" id="senha"  class="form-control" aria-describedby="emailHelp" placeholder="Digite sua senha">
                            </div>
                            <div class="form-group">
                                <label for="confirmacao_senha">Confirme sua senha</label>
                                <input type="password" v-model="confirmacaoSenha" name="confirmacao_senha" id="confirmacao_senha"  class="form-control" aria-describedby="emailHelp" placeholder="Digite sua senha">
                            </div>
                            <div class="col-md-12 text-center mb-3">
                                <button @click="cadastrar" type="button" class=" btn btn-block mybtn btn-primary tx-tfm">Cadastrar</button>
                            </div>
                            <div class="col-md-12 ">
                                <div class="form-group">
                                    <p class="text-center">Já tem uma conta? <a href="#" @click="irParaLogin" id="signin" class="color-link">Entre aqui</a></p>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
			</div>
		</div>
    </div>   
</template>


<script>

import mixinGerenciarUsuario from '@/mixins/mixinGerenciarUsuario'
export default {

    data: () => ({
        nome: "",
        cpf: "",
        senha: "",
        confirmacaoSenha: "",
        email: "",
        telefone: "",
        celular: "",
    }),

    mixins: [
        mixinGerenciarUsuario
    ],

    methods: {

        irParaLogin() {
            this.$router.push({
                name: 'Login'
            })
        },

        cadastrar() {
            if (this.senha === this.confirmacaoSenha) {
                let objUsuario = {
                    nome: this.nome,
                    cpf: this.cpf,
                    senha: this.senha,
                    email: this.email,
                    telefone: this.telefone,
                    celular: this.celular,
                    endereco: {
                        rua: "",
                        numero: "",
                        cep: "",
                        bairro: "",
                        cidade: "",
                        estado: ""
                    },
                    quantidadePontos: 0
                }

                this.mixinCadastrarUsuario(objUsuario)
            }
        }
    }
}
</script>


<style scoped>
body{
    padding-top:4.2rem;
    padding-bottom:4.2rem;
    background:rgba(0, 0, 0, 0.76);
}
a{
    text-decoration:none !important;
}
h1,h2,h3{
    font-family: 'Kaushan Script', cursive;
}

.color-link {
    color: #00A2FF;
}

.myform{
    position: relative;
    display: -ms-flexbox;
    display: flex;
    padding: 1rem;
    -ms-flex-direction: column;
    flex-direction: column;
    width: 100%;
    pointer-events: auto;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid rgba(0,0,0,.2);
    border-radius: 1.1rem;
    outline: 0;
    max-width: 500px;
}
.tx-tfm{
    text-transform:uppercase;
}
.mybtn{
    border-radius:50px;
}

.login-or {
    position: relative;
    color: #aaa;
    margin-top: 10px;
    margin-bottom: 10px;
    padding-top: 10px;
    padding-bottom: 10px;
}
.span-or {
    display: block;
    position: absolute;
    left: 50%;
    top: -2px;
    margin-left: -25px;
    background-color: #fff;
    width: 50px;
    text-align: center;
}
.hr-or {
    height: 1px;
    margin-top: 0px !important;
    margin-bottom: 0px !important;
}
.google {
    color:#666;
    width:100%;
    height:40px;
    text-align:center;
    outline:none;
    border: 1px solid lightgrey;
}
form .error {
    color: #ff0000;
}

.container {
    margin-bottom: 50px;
    margin-top: 50px;
}
</style>