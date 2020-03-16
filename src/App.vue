<template>
  <div id="app">
    <Nav />
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/stats">Stats</router-link> |
      <router-link to="/new-ticket">New Ticket</router-link>
    </div> -->
    <router-view/>
  </div>
</template>


<script>
// @ is an alias to /src
import Nav from '@/components/Nav.vue';

export default {
  name: 'Home',
  components: {
    Nav,
  },
};
</script>


<style lang="scss">
  @import '/assets/styles/globals.scss';

  #app {
    display: flex;
    height: 100%;
    width: 100%;
  }
// #app {
//   font-family: Avenir, Helvetica, Arial, sans-serif;
//   -webkit-font-smoothing: antialiased;
//   -moz-osx-font-smoothing: grayscale;
//   text-align: center;
//   color: #2c3e50;
// }

// #nav {
//   padding: 30px;

//   a {
//     font-weight: bold;
//     color: #2c3e50;

//     &.router-link-exact-active {
//       color: #42b983;
//     }
//   }
// }
</style>
