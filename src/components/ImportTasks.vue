<template>
  <button @click="importFromJSON">Import tasks</button>
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
</style>
