<template>
  <div class="navItem">
    <span :class="img" class="navItem__img" ></span>
    <h2 class="navItem__title">{{ title }}</h2>
  </div>
</template>

<script>

export default {
  name: 'NavItem',
  props: {
    img: String,
    title: String,
  },
};
</script>

<style lang="scss">
  @import './../assets/icomoon/style.css';
  @import './../assets/styles/variables.scss';
  .navItem {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: $nav-width;
    &__img{
      font-size: 40px;
      margin-bottom: 5px;
      color: $white;
    }
    &__title {
      color: $white;
    }

  }
</style>
