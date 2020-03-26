<template>
  <div class="import" @click="importFromJSON">
    <span class="import__icon icon-import"></span>
    <button class="import__btn">Import tasks</button>
  </div>
</template>

<script>
export default {
  name: 'ImportTasks',
  methods: {
    importFromJSON() {
      this.$store.dispatch('getTasks');
    },
  },
};
</script>

<style lang="scss">
  @import '../assets/styles/variables.scss';
  @import './../assets/icomoon/style.css';
  .import {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    &__icon {
      margin-right: $gap;
      color: $white;
    }
    &__btn {
      color: $white;
    }
  }
</style>
