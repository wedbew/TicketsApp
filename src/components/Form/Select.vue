<template>
  <div class="form__field">
    <label
      class="form__title"
      for="severity"
      :class="{ 'form__title--error': error }">{{ title }}</label>
    <vSelect
      label="severity"
      v-model="selectedSeverity"
      :options="this.severity"
      class="form__select"
      :class="{ 'form__input--error': error }"
    ></vSelect>
    <slot></slot>
  </div>
</template>

<script>
import vSelect from 'vue-select';

export default {
  name: 'Select',
  props: {
    title: String,
    error: Object,
  },
  components: {
    vSelect,
  },
};
</script>

<style lang="scss">
  @import '../assets/styles/variables.scss';
</style>
