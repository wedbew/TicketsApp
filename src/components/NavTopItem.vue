<template>
  <div class="navTopItem">
    <span @click="isOpen = !isOpen" :class="img" class="navTopItem__img" ></span>
    <div class="navTopItem__menu" v-if="isOpen">
      <ImportTasks />
      <ExportTasks />
    </div>
  </div>
</template>

<script>

import ExportTasks from './ExportTasks.vue';
import ImportTasks from './ImportTasks.vue';

export default {
  name: 'NavItem',
  props: {
    img: String,
  },
  components: {
    ExportTasks,
    ImportTasks,
  },
  data() {
    return {
      isOpen: false,
    };
  },
};
</script>

<style lang="scss">
  @import './../assets/icomoon/style.css';
  @import './../assets/styles/variables.scss';
  .navTopItem {
    display: flex;
    cursor: pointer;
    position: relative;
    // &:first-of-type {
    //   margin-right: 20px;
    // }
    &__img {
      font-size: 25px;
    }
    &__menu {
      display: flex;
      flex-wrap: wrap;
      flex-direction: column;
      min-width: 150px;
      background-color: $grey;
      padding: $gap;
      right: 40px;
      position: absolute;
    }
  }
</style>
