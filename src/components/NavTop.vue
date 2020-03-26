<template>
  <div class="navTop">
    <div class="navTop__select" v-if="select === true">
      <Users
        className="select--borderless"
        :value="this.$store.state.activePerson" />
    </div>
    <div class="navTop__menu">
      <NavTopItem v-for="(item, index) in items" :key="index" :img='item.img' />
    </div>
  </div>
</template>

<script>
import Users from './Form/Users.vue';
import NavTopItem from './NavTopItem.vue';

export default {
  name: 'NavTop',
  components: {
    Users,
    NavTopItem,
  },
  props: {
    select: Boolean,
  },
  data() {
    return {
      items: [
        {
          img: 'icon-grid',
        },
      ],
    };
  },
};
</script>

<style lang="scss">
  @import '../assets/styles/variables.scss';
  @import '../assets/styles/globals.scss';

  .navTop {
    @include rwd('large-phone') {
      padding-top: 60px;
    }
    width: 100%;
    min-height: 101px;
    margin: 0 15px;
    background-color: $white;
    padding: 30px 15px $gap 15px;
    border-bottom: 1px solid $grey;
    display: flex;
    justify-content: space-between;
    &__menu {
      display: flex;
      align-items: flex-start;
    }
  }
</style>
