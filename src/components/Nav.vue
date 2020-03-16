<template>
  <div class="nav">
    <router-link v-for="(page, index) in pages" :key="index" :to="page.path">
      <NavItem :title="page.title" :img="page.img" />
    </router-link>
  </div>
</template>

<script>
// @ is an alias to /src
import NavItem from './NavItem.vue';

export default {
  name: 'Nav',
  components: {
    NavItem,
  },
  data() {
    return {
      pages: [
        {
          path: '/',
          title: 'Home',
          img: 'icon-home',
        },
        {
          path: '/stats',
          title: 'Stats',
          img: 'icon-chart',
        },
        {
          path: '/new-ticket',
          title: 'New Task',
          img: 'icon-assign',
        },
      ],
    };
  },
};
</script>

<style lang="scss">
  @import '../assets/styles/variables.scss';
  .nav {
    display: flex;
    flex-direction: column;
    background: $dark-blue;
    min-height: 100vh;
    height: 100%;
    width: $nav-width;
  }
  a {
    &:hover {
      background-color: $blue;
    }
    &.router-link-exact-active {
      background-color: $blue;
    }
  }
</style>
