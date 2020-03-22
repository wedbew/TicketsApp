<template>
  <div class="arrows">
    <span
      @click="sortDir('asc')"
      :class="(this.$store.state.sortBy === sortBy &&  this.$store.state.sortDir === 'asc')
      ? 'arrows__icon--active' : ''"
      class="icon-up arrows__icon arrows__icon--up"></span>
    <span
      @click="sortDir('dsc')"
      :class="(this.$store.state.sortBy === sortBy &&  this.$store.state.sortDir === 'dsc')
      ? 'arrows__icon--active' : ''"
      class="icon-down arrows__icon arrows__icon--down"></span>
  </div>
</template>

<script>
export default {
  name: 'Arrows',
  props: {
    sortBy: String,
  },
  methods: {
    sortDir(sortDir) {
      if (sortDir === this.$store.state.sortDir) {
        return;
      }
      this.$store.commit('CHANGE_SORT_DIR', sortDir);
    },
  },
};
</script>

<style lang="scss">
  @import '../../assets/styles/variables.scss';
  @import './../../assets/icomoon/style.css';
  .arrows {
    display: flex;
    flex-direction: column;
    &__icon {
      font-size: 8px;
      color: $white;
      font-weight: 700;
      cursor: pointer;
      opacity: .5;
      &--active {
        opacity: 1;
      }
      &--up {
        margin-bottom: 5px;
      }
    }
  }
</style>
