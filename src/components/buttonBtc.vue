<template>
    <div class="buttonBtc">
    <button @click='recherche($root.cryptomonnaie)'>Afficher</button>    
        <div v-if="affichage" class="resultats">
            <ul>
                <li>${{ resultat.USD }}</li>
                <li>€{{ resultat.EUR }}</li>
                <li>£{{ resultat.GBP }}</li>
		    </ul>
        </div>
        <router-view @cryptomonnaie="recherche" />
    </div>
</template>

<script>
const axios = require('axios');
export default {
  name: "buttonBtc",
    data: function () {
        return {
            resultat: null,
            affichage: false
        }
    },
    methods: {
        recherche: async function(cryptomonnaie) {
                    await axios
                    .get("https://min-api.cryptocompare.com/data/price?fsym="+ cryptomonnaie +"&tsyms=USD,GBP,EUR")
                    .then(response => (this.resultat = response.data))
                    if(this.affichage == false) {
                        this.affichage = true
                    } else {
                        this.affichage = false
                    }
        }
            
    }
}
</script>

<style>
.resultats{
		text-align:left;
		border: 8px outset rgb(196, 193, 193) ;
		background:rgb(196, 193, 193);
		color: black;
		margin-left: 10%;
	}
.buttonBtc button {
    font-family: Arial,sans-serif;
     font-size: 1.6em;
     width: 300px;
     height: 43px;
     padding-top: 7px;
     text-align: center;
     color: whitesmoke;
     background: #444;
     background: linear-gradient( #555, #2C2C2C);
     border-radius: 8px;
     text-shadow: 0px 1px 0px rgba( 255, 255, 255, 0.2);
     box-shadow: 0 0 5px rgba( 0, 0, 0, 0.5),

}
.buttonBtc button:hover {
     color: #222;
     background: #555;
     background: linear-gradient( #777, #333);
     }

.buttonBtc button:active{
     color: #000;
     background: #444;
     background: linear-gradient( #555, #2C2C2C);
     box-shadow: 1px 1px 10px black inset, 
                 0 1px 0 rgba( 255, 255, 255, 0.4);
}  

</style>
