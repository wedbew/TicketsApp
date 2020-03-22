<template>
  <div class="navTopItem">
    <span :class="img" class="navTopItem__img" ></span>
  </div>
</template>

<script>

export default {
  name: 'NavItem',
  props: {
    img: String,
  },
};
</script>

<style lang="scss">
  @import './../assets/icomoon/style.css';
  @import './../assets/styles/variables.scss';
  .navTopItem {
    display: flex;
    cursor: pointer;
    &:first-of-type {
      margin-right: 20px;
    }
    &__img {
      font-size: 25px;
    }
  }
</style>
