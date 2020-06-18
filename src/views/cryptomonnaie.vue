<template>
<div class="cryptomonnaie">
  <div @click.capture="Btc">
    <h1>Cour du Bitcoin</h1>
    <buttonBtc></buttonBtc>
    <br>
    <br>       
  </div>
  <div @click.capture="Eth">
    <h1>Cour de l'Ethereum</h1>
    <buttonBtc></buttonBtc>
    <br>
    <br>       
  </div>
  <div @click.capture="Ltc">
    <h1>Cour du Litecoin</h1>
    <buttonBtc></buttonBtc>
    <br>
    <br>       
  </div>
</div>  
</template>

<script>

import buttonBtc from "../components/buttonBtc.vue";

export default {
    name:'cryptomonnaie',
    data () {
        return {} 
    },
    components: {
    buttonBtc
    },
    methods: {
        Btc() {
            this.$root.cryptomonnaie = 'BTC'
        },
        Eth() {
            this.$root.cryptomonnaie = 'ETH'
        },
        Ltc() {
            this.$root.cryptomonnaie = 'LTC'
        }
    }
}
</script>