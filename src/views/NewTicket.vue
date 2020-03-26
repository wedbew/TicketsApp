<template>
  <div class="container">
    <div class="newTicket">
      <!-- <h1>New tikcet</h1> -->
      <Form />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Form from '../components/Form.vue';

export default {
  name: 'NewTicket',
  components: {
    Form,
  },
};
</script>

<style lang="scss">
  @import '../assets/styles/variables.scss';
  @import '../assets/styles/globals.scss';
  .newTicket {
    @include rwd('tablet') {
      margin-top: 50px;
      align-items: flex-start;
    }
    padding: 0 15px;
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }
</style>
