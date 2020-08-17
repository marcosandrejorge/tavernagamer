<template>
    <!-- Start Product Area -->
    <div class="product-area section">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="section-title">
                        <h2>{{categoria}}</h2>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-12">
                    <div class="product-info">
                        
                        <div class="tab-content" id="myTabContent">
                            <!-- Start Single Tab -->
                            <div class="tab-pane fade show active" id="man" role="tabpanel">
                                <div class="tab-single">
                                    <div class="row">
                                        <div 
                                            class="col-xl-3 col-lg-4 col-md-4 col-12"
                                            v-for="(item, index) in arrItens" :key="index"
                                        >
                                            <div class="single-product">
                                                <div class="product-img">
                                                    <a @click="detalhesProduto(item.id)">
                                                        <img class="default-img" :src="item.urlImage" :alt="item.descricao" style="object-fit: contain !important;height:280px">
                                                        <img class="hover-img" :src="item.urlImage" :alt="item.descricao" style="object-fit: contain !important;height:280px">
                                                    </a>                                                
                                                </div>
                                                <div class="product-content">
                                                    <h3><a href="">{{item.descricao}}</a></h3>
                                                    <div class="product-price">
                                                        <span>R$ {{mixinConverterNumberToText(item.valorUnidade)}}</span>
                                                    </div>
                                                </div>
                                                <div class="product-content" style="margin-bottom:5px">
                                                    <h3><a href="">Quantidade</a></h3>
                                                    <div class="product-price">
                                                        <input style="width:100%;" type="number" name="quantidade" v-model="item.quantidade"/>
                                                    </div>
                                                </div>
                                                <div>
                                                    <div class="bottom">
                                                        <button 
                                                            class="btn animate" 
                                                            style="width:100%"
                                                            @click="adicionarCarrinho(item)"
                                                        >
                                                            Adicionar ao carrinho
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
	<!-- End Product Area -->
</template>


<script>

import { mapActions } from 'vuex'
import mixinValores from '@/mixins/mixinValores'
export default {
    props:{
        arrItens: {
            type: Array
        },
        categoria: {
            type: String
        },
        search: {
            type: String
        }
    },

    mixins: [
        mixinValores
    ],

    computed: {
        getTitulo() {
            return this.categoria != "" ? this.categoria : this.search
        }
    },

    methods: {

        ...mapActions(['setAdicionarUmItemCarrinho']),

        detalhesProduto(idItem) {
            return idItem;
        },

        adicionarCarrinho(item) {
            item.valorTotal = item.quantidade * item.valorUnidade
            this.setAdicionarUmItemCarrinho(item);
        }
    }
}
</script>