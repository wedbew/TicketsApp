<template>
  <div class="form__field" :class="{ 'form__field--error': error }">
    <label
      class="form__title"
      :class="{ 'form__title--error': error }"
      :for="title">{{ title }}</label>
    <input
      v-model.trim="model"
      type="text"
      name="title"
      class="form__input"
      :class="{ 'form__input--error': error }">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'Input',
  props: {
    error: Object,
    model: Object,
    title: String,
  },
};
</script>

<style lang="scss">
  @import '../assets/styles/variables.scss';
</style>
