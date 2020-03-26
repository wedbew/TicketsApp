<template>
  <div class="container container--fluid">
    <div class="home">
      <NavTop select />
      <Header title="Tickets" />
      <div class="home__table">
        <Table
          :data="this.$store.getters.searchByUser(this.$store.state.activePerson)"
        />
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import NavTop from '../components/NavTop.vue';
import Table from '../components/Table.vue';
import Header from '../components/Header.vue';

export default {
  name: 'Home',
  components: {
    NavTop,
    Table,
    Header,
  },
};
</script>

<style lang="scss">
  @import '../assets/styles/globals.scss';

  .home {
    background-color: $light-grey;
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 100vh;
    width: 100%;
    &__nav {
      width: 100%;
      min-height: 101px;
      background-color: $white;
      padding: 30px 0 $gap 0;
      border-bottom: 1px solid $grey;
      margin: 0 15px;
    }
    &__table {
      @include rwd('large-laptop') {
        width: 100%;
      }
      overflow-x: hidden;
      padding: $gap;
      width: 100%;
      // width: 1260px;
    }
  }
</style>
