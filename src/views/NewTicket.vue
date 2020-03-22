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
  .newTicket {
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-wrap: wrap;
  }
</style>
