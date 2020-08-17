<template>
    <div>
        <Produtos :arrItens="getProdutos" :categoria="categoria" :search="search"/>
    </div>
</template>

<script>

import itens from '@/arrItens.js'
import Produtos from '@/components/Produtos'

export default {

    props: {
        search: {
            type: String,
            default: "",
        },
        categoria: {
            type: String,
            default: "Produtos",
        }
    },

    components: {
        Produtos
    },

    computed: {
        getProdutos() {
            if (this.categoria != "") {
                return this.arrItens.filter(item => {
                    return item.categoria.toLowerCase().indexOf(this.categoria.toLowerCase()) > -1
                });
            }

            return this.arrItens;
        }
    },

    data:() => ({
        arrItens: itens,
	}),
}
</script>