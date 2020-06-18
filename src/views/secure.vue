<template>
    <div id="secure">
        <h1>Page sécurisée</h1>
        <p>
            Votre nom d'utilisateur est : {{this.$root.username}}
        </p>
    </div>
</template>

<script>
    export default {
        name: 'Secure',
        data() {
            return {}
        },
    }
</script>

<style scoped>
    #secure {
        background-color: #FFFFFF;
        border: 1px solid #CCCCCC;
        padding: 20px;
        margin-top: 10px;
    }
</style>