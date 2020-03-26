<template>
  <div>
    <div class="nav" :class="{ 'nav--active' : isMobile }">
      <router-link v-for="(page, index) in pages" :key="index" :to="page.path">
        <NavItem :title="page.title" :img="page.img" />
      </router-link>
    </div>
    <div v-if="mobile" class="nav__mobile" @click="mobileMenu">
      <div></div>
      <div></div>
      <div></div>
    </div>
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
      mobile: false,
      isMobile: false,
    };
  },
  created() {
    if (window.innerWidth < 767) {
      this.mobile = true;
    } else {
      this.mobile = false;
    }
  },
  mounted() {
    window.addEventListener('resize', () => {
      if (window.innerWidth < 767) {
        this.mobile = true;
      } else {
        this.mobile = false;
      }
    });
  },
  methods: {
    mobileMenu() {
      this.isMobile = !this.isMobile;
    },
  },
};
</script>

<style lang="scss">
  @import '../assets/styles/globals.scss';
  .nav {
    @include rwd('tablet') {
      position: fixed;
      padding-top: 60px;
      left: -$nav-width;
    }
    display: flex;
    flex-direction: column;
    background: $dark-blue;
    min-height: 100vh;
    height: 100%;
    min-width: $nav-width;
    z-index: 4;
    transition: left 250ms ease-in;

    &--active {
      left: 0 !important;
    }

    &__mobile {
      position: fixed;
      top: 0;
      left: 0;
      padding: $gap;
      z-index: 5;
      cursor: pointer;
      div {
        background-color: $dark-grey;
        width: 30px;
        height: 5px;
        margin-bottom: 5px;
        &:last-of-type {
          margin-bottom: unset;
        }
      }
    }
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
