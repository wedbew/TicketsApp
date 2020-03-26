<template>
  <transition v-if="isOpen" name="modal">
    <div class="modal">
      <div class="modal__wrapper">
        <h2 class="modal__title">{{title}}</h2>
        <p class="modal__sdescription">{{description}}</p>
        <div class="modal__body">
          <slot>
          </slot>
        </div>
        <button class="modal__close" @click="closeModal">
          &times;
        </button>
      </div>
    </div>
  </transition>
</template>

<script>

export default {
  name: 'Modal',
  props: {
    title: String,
    description: String,
  },
  computed: {
    isOpen() {
      return this.$store.state.openModal;
    },
  },
  methods: {
    openModal() {
      this.$store.commit('UPDATE_MODAL', true);
    },
    closeModal() {
      this.$store.commit('UPDATE_MODAL', false);
    },
  },
};
</script>

<style lang="scss">
  @import '../assets/styles/variables.scss';
  @import '../assets/styles/globals.scss';
  .modal {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, .25);
    width: 100%;
    min-height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: scroll;

    &__wrapper {
      @include rwd('tablet') {
      padding-top: 70px;
      }
      @include rwd('tablet') {
        width: 100%;
      }
      position: relative;
      width: 60%;
      background-color: $white;
      padding: 20px;
    }
    &__title {
      font-size: 3rem;
    }
    &__descirption {
      font-size: 2rem;
    }

    &__form {
      padding: 2rem;
    }
    &__close {
      @include rwd('tablet') {
        top: 20px;
      }
      position: absolute;
      display: inline-block;
      top: 0;
      right: 0;
      padding: $gap;
      font-size: 2em;
      height: 2em;
      font-weight: 700;
    }
  }
</style>
