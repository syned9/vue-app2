<template>
  <div id="app">
    <h1>Denys</h1>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/cryptomonnaie">Cryptomonnaie</router-link> |
      <router-link v-if="authenticated" to="/login" v-on:click.native="logout()" replace>Déconnexion</router-link>
    </div>
    <router-view @authenticated="setAuthenticated" />
  </div>
</template>

<script>
    export default {
        name: 'App',
        data() {
            return {
                authenticated: false,
            }
        },
        mounted() {
            if(!this.authenticated) {
                this.$router.replace({ name: "login" });
            }
        },
        methods: {
            setAuthenticated(status) {
                this.authenticated = status;
            },
            logout() {
                this.authenticated = false;
            }
        }
    }
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 1024px;
  margin: auto;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

body {
    background-color: #F0F0F0;
}

h1 {
    padding: 0;
    margin-top: 0;
}
</style>
