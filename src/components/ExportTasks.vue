<template>
  <div class="export" @click="toJSON">
    <span class="export__icon icon-export"></span>
    <button class="export__btn">Export tasks</button>
  </div>
</template>

<script>
export default {
  name: 'ExportTasks',
  methods: {
    encode(s) {
      const out = [];
      for (let i = 0; i < s.length; i += 1) {
        out[i] = s.charCodeAt(i);
      }
      return new Uint8Array(out);
    },
    toJSON() {
      const data = this.encode(JSON.stringify(this.$store.state.tickets, null, 4));
      const blob = new Blob([data], {
        type: 'application/octet-stream',
      });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.setAttribute('href', url);
      link.setAttribute('download', 'tasks.json');
      const event = document.createEvent('MouseEvents');
      event.initMouseEvent('click', true, true, window, 1, 0, 0, 0, 0, false, false, false, false, 0, null);
      link.dispatchEvent(event);
    },
  },
};
</script>

<style lang="scss">
  @import '../assets/styles/variables.scss';
    @import './../assets/icomoon/style.css';
  .export {
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
