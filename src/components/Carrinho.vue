<template>
    <div class="sinlge-bar shopping">
        <a href="#" class="single-icon"><i class="ti-bag"></i> <span class="total-count">{{getQuantidadeItens}}</span></a>
        <!-- Shopping Item -->
        <div class="shopping-item">
            <div class="dropdown-cart-header">
                <span>{{getQuantidadeItens}} itens</span>
                <!-- <a href="#">Ver carrinho</a> -->
            </div>
            <ul class="shopping-list">
                <li v-for="(item, index) in getItensCarrinho" :key="index">
                    <button @click="removerItem(index)" class="remove" title="Remover item"><i class="fa fa-remove"></i></button>
                    <a class="cart-img" href="#"><img :src="item.urlImage" alt="#"></a>
                    <h4><a href="#">{{item.descricao}}</a></h4>
                    <p class="quantity">{{item.quantidade}}x - <span class="amount">R$ {{mixinConverterNumberToText(item.valorTotal)}}</span></p>
                </li>
            </ul>
            <div class="bottom">
                <div class="total">
                    <span>Total</span>
                    <span class="total-amount">R$ {{mixinConverterNumberToText(getValorTotalCarrinho)}}</span>
                </div>
                <a style="cursor: pointer" v-show="getQuantidadeItens > 0" @click="irParaCarrinho()" class="btn animate">Finalizar pedido</a>
            </div>
        </div>
        <!--/ End Shopping Item -->
    </div>
</template>

<script>

import { mapGetters } from 'vuex'
import { mapActions } from 'vuex'
import mixinValores from '@/mixins/mixinValores'
export default {

    mixins: [
        mixinValores
    ],

    computed: {
        ...mapGetters(['getItensCarrinho', 'getValorTotalCarrinho', 'getQuantidadeItens']),
    },

    methods: {
        ...mapActions(['deleteItemCarrinho']),

        irParaCarrinho() {
            this.$router.push({
                name: 'FinalizarPedido'
            })
        },

        removerItem(index) {
            this.deleteItemCarrinho(index);
        }
    }
}
</script>