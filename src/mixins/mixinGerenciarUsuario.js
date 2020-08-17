
import { mapGetters } from 'vuex'
import { mapActions } from 'vuex'
export default {

    computed: {
        ...mapGetters(['getDadosUsuario', 'getUsuariosCadastrados', 'getIsFinalizarPedido']),
    },

    methods: {
        ...mapActions(['setLogar', 'setCadastrarUsuario']),

        mixinLogin(email, senha) {
            this.getUsuariosCadastrados.map(usuario => {
                if (usuario.email === email && usuario.senha === senha) {
                    this.setLogar(usuario)

                    let rota = this.getIsFinalizarPedido ? 'FinalizarPedido' : 'Home'
                    this.$router.push({
                        name: rota
                    })
                }
            });
        },

        mixinCadastrarUsuario(objUsuario) {
            this.setCadastrarUsuario(objUsuario);
            this.$router.push({
                name: 'Home'
            })
        }
    }
}