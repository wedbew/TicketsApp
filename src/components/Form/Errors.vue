<template>
  <div class="form__errors" v-if="!error">
    <span class="form__error" v-if="!required">Field is required</span>
    <span class="form__error" v-if="!minlen">Title must have at least
      {{params}} letters.</span>
  </div>
</template>

<script>
export default {
  name: 'Errors',
  props: {
    error: Function,
    required: Function,
    minlen: Function,
    params: Function,
  },
};
</script>

<style lang="scss">
  @import '../assets/styles/variables.scss';
</style>
