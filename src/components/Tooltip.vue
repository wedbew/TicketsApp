<template>
  <div v-if="isOpen" @click="closeTooltip" class="tooltip">
    <div
      :style="{ top: y +'px', right: x*-1 + 'px'}"
      class="tooltip__wrapper"
      :data-id="this.$store.state.activeTicket">
      <div class="tooltip__row" @click="deleteTicket()">
        <span class="tooltip__icon icon-bin"></span>
        <h3 class="tooltip__title">Delete</h3>
      </div>
      <div class="tooltip__row" @click="editTicket()">
        <span class="tooltip__icon icon-edit"></span>
        <h3 class="tooltip__title">Edit</h3>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Tooltip',
  data() {
    return {
      isOpen: false,
      x: null,
      y: null,
    };
  },
  methods: {
    openTooltip(x, y) {
      this.x = x;
      this.y = y;
      this.isOpen = true;
    },
    closeTooltip() {
      this.isOpen = false;
    },
    deleteTicket() {
      this.$store.commit('REMOVE_TICKET', this.$store.state.activeTicket);
      this.closeTooltip();
    },
    editTicket() {
      // this.$props.modalRef.openModal();
      this.$store.commit('UPDATE_MODAL', true);
      this.closeTooltip();
    },
  },
};
</script>

<style lang="scss">
  @import '../assets/styles/variables.scss';
    .tooltip {
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;
    &__wrapper {
      position: absolute;
      z-index: 2;
      background-color: $white;
      padding: $gap;
      transition: opacity .25s ease-in-out;
    }
    &__row {
      display: flex;
      margin-bottom: $gap;
      cursor: pointer;
      &:last-of-type {
        margin-bottom: unset;
      }
    }
    &__icon {
      margin-right: $gap;
    }
  }
</style>
