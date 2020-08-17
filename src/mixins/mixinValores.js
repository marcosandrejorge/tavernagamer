export default {
    methods: {
        
        mixinConverterNumberToText(number) {
            return number.toLocaleString('pt-br', { minimumFractionDigits: 2 });
        },

        mixinConverterTextToNumber(number) {
            return parseFloat(number).toFixed(2)
        },
    }
}