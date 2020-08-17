<template>
    <div class="container">
        <div class="row">
			<div class="col-md-5 mx-auto">
                <div id="first">
                    <div class="myform form ">
                        <div class="logo mb-3">
                            <div class="col-md-12 text-center">
                                <h1>Login</h1>
                            </div>
                        </div>
                        <form method="post" name="login">
                            <div class="form-group">
                                <label for="email">Email</label>
                                <input v-model="email" type="email" name="email"  class="form-control" id="email" aria-describedby="emailHelp" placeholder="Digite seu email">
                            </div>
                            <div class="form-group">
                                <label for="password">Senha</label>
                                <input v-model="senha" type="password" name="password" id="password"  class="form-control" aria-describedby="emailHelp" placeholder="Digite sua senha">
                            </div>
                            <div class="form-group">
                                <p class="text-center">Ao se inscrever, você aceita nossos <a href="" class="color-link">Termos de Uso</a></p>
                            </div>
                            <div class="col-md-12 text-center ">
                                <button @click="login()" type="button" class=" btn btn-block mybtn btn-primary tx-tfm">Login</button>
                            </div>
                            <div class="col-md-12 ">
                                <div class="login-or">
                                    <hr class="hr-or">
                                    <span class="span-or">or</span>
                                </div>
                            </div>
                            <div class="form-group">
                                <p class="text-center">Não tem conta? <a href="" @click="irParaCadastro" class="color-link">Cadastre-se aqui</a></p>
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
        email: "",
        senha: ""
    }),

    mixins: [
        mixinGerenciarUsuario
    ],

    methods: {

        irParaCadastro() {
            this.$router.push({
                name: 'CadastroUsuario'
            })
        },

        login() {
            this.mixinLogin(this.email, this.senha)
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
#second{display:none;}

.container {
    margin-bottom: 50px;
    margin-top: 50px;
}
</style>