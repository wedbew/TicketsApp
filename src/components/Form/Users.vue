<template>
  <div :class="className" class="select">
    <label v-if="label"
      class="form__title"
      :for="label">
      Task asigned to:
    </label>
      <vSelect v-if="value"
        :label="label"
        @input="setActivePerson"
        :options="this.people"
        :value="this.$store.state.activePerson"
        class="form__select"
      ></vSelect>
      <vSelect v-else
        :label="label"
        @input="setActivePerson"
        :options="this.people"
        :value="this.$store.state.activePerson"
        class="form__select"
      ></vSelect>
  </div>
</template>

<script>
import vSelect from 'vue-select';

export default {
  name: 'Users',
  props: {
    className: String,
    label: String,
    value: String,
  },
  data() {
    return {
      people: [],
      allUsers: this.value ? this.value : null,
    };
  },
  components: {
    vSelect,
  },
  created() {
    this.$store.dispatch('getUsers').then(
      () => {
        this.setPeople();
      },
    );
  },
  methods: {
    setPeople() {
      if (this.allUsers !== null) {
        this.people.push('All users');
      }
      this.$store.state.users.forEach((user) => this.people.push(user));
    },
    setActivePerson(value) {
      this.$store.commit('SET_ACTIVE_PERSON', value);
    },
  },
};
</script>

<style lang="scss">
  @import "vue-select/src/scss/vue-select.scss";

  .select {
    width: 100%;
    &--borderless {
        width: 250px;
        * {
          border: unset !important;
        }
      }
  }
</style>
