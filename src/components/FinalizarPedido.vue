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
                                        <input type="text" name="cep" placeholder="" required="required">
                                    </div>
                                </div>
                                <div class="col-lg-6 col-md-6 col-12">
                                    <div class="form-group">
                                        <label>Rua<span></span></label>
                                        <input type="text" name="rua" placeholder="" required="required">
                                    </div>
                                </div>
                                <div class="col-lg-6 col-md-6 col-12">
                                    <div class="form-group">
                                        <label>Número<span></span></label>
                                        <input type="email" name="numero" placeholder="" required="required">
                                    </div>
                                </div>
                                <div class="col-lg-6 col-md-6 col-12">
                                    <div class="form-group">
                                        <label>Bairro<span></span></label>
                                        <input type="text" name="bairro" placeholder="" required="required">
                                    </div>
                                </div>
                                <div class="col-lg-6 col-md-6 col-12">
                                    <div class="form-group">
                                        <label>Estado<span></span></label>
                                        <input type="text" name="estado" placeholder="" required="required">
                                    </div>
                                </div>
                                <div class="col-lg-6 col-md-6 col-12">
                                    <div class="form-group">
                                        <label>Cidade<span></span></label>
                                        <input type="text" name="cidade" placeholder="" required="required">
                                    </div>
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
                            <h2>Total carrinho</h2>
                            <div class="content">
                                <ul>
                                    <li>Subtotal<span>R$330,00</span></li>
                                    <li>(+) Frete<span>R$10,00</span></li>
                                    <li class="last">Total<span>R$340,00</span></li>
                                </ul>
                            </div>
                        </div>
                        <!--/ End Order Widget -->
                        <!-- Order Widget -->
                        <div class="single-widget">
                            <h2>Formas de pagamento</h2>
                            <div class="content">
                                <div class="checkbox-pagamento">
                                    <label for="1"><input name="pagamento" id="1" value="credito" type="radio"> Cartão de crédito</label>
                                    <label for="2"><input name="pagamento" id="2" value="boleto" type="radio"> Boleto</label>
                                    <label for="3"><input name="pagamento" id="3" value="paypal" type="radio"> PayPal</label>
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
                        <!--/ End Payment Method Widget -->
                        <!-- Button Widget -->
                        <div class="single-widget get-button">
                            <div class="content">
                                <div class="button">
                                    <a href="#" class="btn">Processar pagamento</a>
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
</style>