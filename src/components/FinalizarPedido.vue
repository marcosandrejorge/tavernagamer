<template>
    <!-- Start Checkout -->
    <section class="shop checkout section">
        <div class="container">
            <div class="row"> 
                <div class="col-lg-8 col-12">
                    <div class="checkout-form">
                        <h2 style="margin-bottom:20px">Preencha seu endereço</h2>
                        <!-- Form -->
                        <form class="form" method="post">
                            <div class="row">
                                <div class="col-lg-6 col-md-6 col-12">
                                    <div class="form-group">
                                        <label>CEP<span></span></label>
                                        <input type="text" v-model="objEndereco.cep" name="cep" placeholder="" required="required">
                                    </div>
                                </div>
                                <div class="col-lg-6 col-md-6 col-12">
                                    <div class="form-group">
                                        <label>Rua<span></span></label>
                                        <input v-model="objEndereco.rua" type="text" name="rua" placeholder="" required="required">
                                    </div>
                                </div>
                                <div class="col-lg-6 col-md-6 col-12">
                                    <div class="form-group">
                                        <label>Número<span></span></label>
                                        <input v-model="objEndereco.numero" type="email" name="numero" placeholder="" required="required">
                                    </div>
                                </div>
                                <div class="col-lg-6 col-md-6 col-12">
                                    <div class="form-group">
                                        <label>Bairro<span></span></label>
                                        <input v-model="objEndereco.bairro" type="text" name="bairro" placeholder="" required="required">
                                    </div>
                                </div>
                                <div class="col-lg-6 col-md-6 col-12">
                                    <div class="form-group">
                                        <label>Estado<span></span></label>
                                        <input v-model="objEndereco.estado" type="text" name="estado" placeholder="" required="required">
                                    </div>
                                </div>
                                <div class="col-lg-6 col-md-6 col-12">
                                    <div class="form-group">
                                        <label>Cidade<span></span></label>
                                        <input v-model="objEndereco.cidade" type="text" name="cidade" placeholder="" required="required">
                                    </div>
                                </div>
                            </div>
                        </form>
                        <!--/ End Form -->
                    </div>

                    <div class="checkout-form" v-show="cep !=''">
                        <h2 style="margin-bottom:20px">Frete</h2>
                        <!-- Form -->
                        <form class="form" method="post">
                            <div class="content">
                                <div class="checkbox-pagamento">
                                    <label 
                                        v-for="(opcao, index) in opcoesFrete"
                                        :key="index"
                                        :for="'opcao_'+index"
                                    >
                                        <input name="opcaoFrete" :id="'opcao_'+index" v-model="opcaoFrete" :value="opcao" type="radio"> 
                                        R$ {{mixinConverterNumberToText(opcao.valor)}} - {{opcao.nome}}
                                    </label>
                                </div>
                            </div>
                        </form>
                        <!--/ End Form -->
                    </div>
                </div>
                <div class="col-lg-4 col-12">
                    <div class="order-details">
                        <!-- Order Widget -->
                        <div class="single-widget">
                            <div class="content" style="padding:0 30px">
                                <label class="color-link ">Você receberá {{getPontosReceber}} pontos em troca dessa compra</label>
                            </div>
                            <h2>Total carrinho</h2>
                            <div class="content">
                                <ul>
                                    <li>Subtotal<span>R$ {{mixinConverterNumberToText(getValorTotalCarrinho)}}</span></li>
                                    <li>(+) Frete<span>R$ {{mixinConverterNumberToText(getValorFrete)}}</span></li>
                                    <li v-show="isFormaPagamentoPontos">(-) Pontos<span>R$ {{mixinConverterNumberToText(getPontosUsadosNaCompra)}}</span></li>
                                    <li v-show="formaPagamento != 'pontos'" class="last">Total<span>R$ {{mixinConverterNumberToText(getValorTotal)}}</span></li>
                                    <li v-show="isFormaPagamentoPontos" class="last">Total<span>R$ {{mixinConverterNumberToText(getValorTotalComPontos)}}</span></li>
                                </ul>
                            </div>
                        </div>
                        <!--/ End Order Widget -->
                        <!-- Order Widget -->
                        <div class="single-widget">
                            <h2>Formas de pagamento</h2>
                            <div class="content">
                                <div class="checkbox-pagamento">
                                    <label for="pagamento1"><input name="pagamento" id="pagamento1" v-model="formaPagamento" value="credito" type="radio"> Cartão de crédito</label>
                                    <label for="pagamento2"><input name="pagamento" id="pagamento2" v-model="formaPagamento" value="boleto" type="radio"> Boleto</label>
                                    <label for="pagamento3"><input name="pagamento" id="pagamento3" v-model="formaPagamento" value="paypal" type="radio"> PayPal</label>
                                    <label for="pagamento4"><input name="pagamento" id="pagamento4" v-model="formaPagamento" value="pontos" type="radio"> Pontos no site</label>
                                </div>
                            </div>
                        </div>
                        <!--/ End Order Widget -->
                        <!-- Payment Method Widget -->
                        <div class="single-widget payement">
                            <div class="content">
                                <img src="images/payment-method.png" alt="#">
                            </div>
                        </div>

                        <div class="single-widget" v-show="isFormaPagamentoPontos">

                            <div 
                                class="content"
                                style="padding:0 30px"
                                v-show="!getPontosSuficientes"
                            >
                                <label class="color-link ">Você não tem pontos suficientes para finalizar a compra, deseja pagar o restante de qual maneira?</label>
                            </div>
                        </div>


                        <div class="single-widget" v-show="isFormaPagamentoPontos && !getPontosSuficientes">
                            <div class="content">
                                <h2>Formas de pagamento extras</h2>
                                <div class="">
                                    <div class="checkbox-pagamento">
                                        <label for="pagamentoExtra1"><input name="pagamentoExtra" id="pagamentoExtra1" v-model="formaPagamentoExtra" value="credito" type="radio"> Cartão de crédito</label>
                                        <label for="pagamentoExtra2"><input name="pagamentoExtra" id="pagamentoExtra2" v-model="formaPagamentoExtra" value="boleto" type="radio"> Boleto</label>
                                        <label for="pagamentoExtra3"><input name="pagamentoExtra" id="pagamentoExtra3" v-model="formaPagamentoExtra" value="paypal" type="radio"> PayPal</label>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="single-widget payement" v-show="formaPagamento == 'credito' || (formaPagamentoExtra == 'credito' && !getPontosSuficientes)">
                            <div class="content">
                                <form class="form" method="post">
                                    <div class="row">
                                        <div class="col-12">
                                            <div class="form-group">
                                                <label>Número cartão<span></span></label>
                                                <input type="text" name="numeroCartao" placeholder="" required="required" value="123456789022">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-12">
                                            <div class="form-group">
                                                <label>Nome impresso no cartão<span></span></label>
                                                <input type="text" name="nomeImpresso" placeholder="" required="required" value="Marcos André Jorge">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-12">
                                            <div class="form-group">
                                                <label>Validade<span></span></label>
                                                <input type="text" name="validade" placeholder="" required="required" value="10/28">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-12">
                                            <div class="form-group">
                                                <label>CVC<span></span></label>
                                                <input type="text" name="CVC" placeholder="" required="required" value="455">
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>

                        <!--/ End Payment Method Widget -->
                        <!-- Button Widget -->
                        <div class="single-widget get-button">
                            <div class="content">
                                <div class="button">
                                    <a href="#" @click="processarPagamento()" class="btn">Processar pagamento</a>
                                </div>
                            </div>
                        </div>
                        <!--/ End Button Widget -->
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!--/ End Checkout -->
</template>

<script>

import { mapGetters, mapActions } from 'vuex'
import mixinValores from '@/mixins/mixinValores'
import Swal from 'sweetalert2'

export default {
    data: () => ({
        formaPagamento: 'credito',
        formaPagamentoExtra: 'credito',
        objEndereco: {
            cep: '',
            rua: '',
            numero: '',
            bairro: '',
            estado: '',
            cidade: '',
        },
        opcaoFrete: null,

        opcoesFrete: [
            {
                valor: 12.00,
                nome: 'Sedex - 3 dias'
            },
            {
                valor: 0.00,
                nome: 'Normal - 8 dias'
            }
        ]
    }),

    mixins: [
        mixinValores
    ],

    computed: {

        ...mapGetters(['getValorTotalCarrinho', 'getPontosAtuais', 'getEndereco']),

        getValorTotal() {
            return this.getValorTotalCarrinho + this.getValorFrete
        },

        getPontosReceber() {
            let valorTotal = this.isFormaPagamentoPontos ? this.getValorTotalCarrinhoComPontos : this.getValorTotalCarrinho

            let valor = valorTotal / 9;
            return this.mixinConverterTextToNumber(valor);
        },

        getValorFrete() {
            return this.opcaoFrete != null ? this.opcaoFrete.valor : 0.00
        },

        getPontosSuficientes() {
            return this.getPontosAtuais >= this.getValorTotal
        },

        //Conta o frete
        getValorTotalComPontos() {
            return (parseFloat(this.getValorTotal) - parseFloat(this.getPontosUsadosNaCompra)).toFixed(2)
        },

        //Não conta o frete
        getValorTotalCarrinhoComPontos() {
            return parseFloat(this.getValorTotalCarrinho) - (parseFloat(this.getPontosUsadosNaCompra) - parseFloat(this.getValorFrete)).toFixed(2);
        },

        getPontosUsadosNaCompra() {
            let valor = this.getPontosAtuais;

            if (this.getPontosSuficientes) {
                valor = this.getValorTotal;
            }

            return parseFloat(valor);
        },

        isFormaPagamentoPontos() {
            return this.formaPagamento == 'pontos';
        }
    },

    methods: {
        ...mapActions([
            'setAdicionarPontos', 
            'setDiminuirPontos', 
            'setFinalizandoPedido', 
            'setItensCarrinho',
            'setEndereco'
            ]
        ),

        processarPagamento() {
            let timerInterval
            Swal.fire({
                title: 'Processando pagamento',
                html: '',
                timer: 2000,
                timerProgressBar: false,
                onBeforeOpen: () => {
                    Swal.showLoading()
                },
                onClose: () => {
                    clearInterval(timerInterval)
                }
            }).then(() => {
                Swal.fire(
                    'Sucesso!',
                    'Seu pagamento foi processado.',
                    'success'
                ).then(() => {
                    this.realizarPagamento();
                })
            })
        },

        realizarPagamento() {

            let pontosDescontados = this.getPontosUsadosNaCompra;
            let pontosReceber = this.getPontosReceber;

            if (this.isFormaPagamentoPontos) {
                this.setDiminuirPontos(pontosDescontados);
            }

            this.setFinalizandoPedido(false);
            this.setAdicionarPontos(pontosReceber);
            this.setItensCarrinho([])
            this.setEndereco(this.objEndereco)

            this.$router.push({
                name: 'Home'
            })
        }
    },

    mounted() {
        this.objEndereco = {...this.getEndereco}
    }
}
</script>

<style>

.checkbox-pagamento {
    text-align: left;
    margin: 0;
    padding: 0px 20px;
    margin-top: 30px;
    cursor: pointer;
}

.checkbox-pagamento label {
    color: #555555;
    position: relative;
    font-size: 14px;
    padding-left: 20px;
    margin-top: -5px;
    font-weight: 400;
    display: block;
    margin-bottom: 15px;
    cursor: pointer;
}

.color-link {
    color: #00A2FF
}
</style>