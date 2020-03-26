<template>
  <div class="header">
    <h2 class="header__title">
      {{ title }}
    </h2>
  </div>
</template>

<script>
export default {
  name: 'Header',
  props: {
    title: String,
  },
};
</script>

<style lang="scss">
  @import '../assets/styles/variables.scss';

  .header {
    width: 100%;
    background-color: $white;
    border-bottom: 1px solid $grey;
    &__title {
      margin-left: 20px;
      padding: 20px 0;
      font-weight: 700;
      font-size: 2em;
    }
  }
</style>
