<template>
    <form @submit.prevent="checkForm" v-on:keyup.enter="checkForm" class="form">
      <div class="form__field" :class="{ 'form__field--error': $v.title.$error }">
        <label
          class="form__title"
          :class="{ 'form__title--error': $v.title.$error }"
          for="title">Title</label>
        <input
          v-model.trim="$v.title.$model"
          type="text"
          name="title"
          class="form__input"
          :class="{ 'form__input--error': $v.title.$error }">
        <div class="form__errors" v-if="$v.title.$error">
          <span class="form__error" v-if="!$v.title.required">Field is required</span>
          <span
            class="form__error"
            v-if="!$v.title.minLength">
              Title must have at least {{$v.title.$params.minLength.min}} letters.
          </span>
        </div>
      </div>
      <div class="form__field">
        <label
          class="form__title"
          :class="{ 'form__title--error': $v.description.$error }"
          for="description">Desription</label>
        <textarea
          v-model.trim="$v.description.$model"
          type="text"
          name="description"
          class="form__input"
          :class="{ 'form__input--error': $v.description.$error }">
        </textarea>
        <div class="form__errors" v-if="$v.description.$error">
          <span class="form__error" v-if="!$v.description.required">Field is required</span>
          <span
            class="form__error"
            v-if="!$v.description.minLength">
              Title must have at least {{$v.description.$params.minLength.min}} letters.
          </span>
        </div>
      </div>
      <div class="form__field">
        <label
          class="form__title"
          for="description">Notes</label>
        <textarea
          v-model="notes"
          type="text"
          name="description"
          class="form__input">
        </textarea>
        <input class="form__input--file" type="file" @change="processFile($event)">
      </div>
      <div class="form__field">
        <label
          class="form__title"
          for="severity"
          :class="{ 'form__title--error': $v.selectedSeverity.$error }">Severity</label>
        <vSelect
          label="severity"
          v-model="selectedSeverity"
          :options="this.severity"
          class="form__select"
          :class="{ 'form__input--error': $v.selectedSeverity.$error }"
        ></vSelect>
        <div class="form__errors" v-if="$v.selectedSeverity.$error">
          <span class="form__error" v-if="!$v.selectedSeverity.required">Field is required</span>
        </div>
      </div>
      <div class="form__field">
        <label
          class="form__title"
          for="status"
          :class="{ 'form__title--error': $v.selectedStatus.$error }">Status</label>
        <vSelect
          label="status"
          v-model="selectedStatus"
          :options="this.status"
          class="form__select"
          :class="{ 'form__input--error': $v.selectedStatus.$error }"
        ></vSelect>
        <div class="form__errors" v-if="$v.selectedStatus.$error">
          <span class="form__error" v-if="!$v.selectedStatus.required">Field is required</span>
        </div>
      </div>
      <div class="form__field">
        <label
          class="form__title"
          :class="{ 'form__title--error': $v.selectedPerson.$error }"
          for="assign">Assign</label>
        <vSelect
          label="assign"
          v-model="selectedPerson"
          :options="this.people"
          class="form__select"
          :class="{ 'form__input--error': $v.selectedPerson.$error }"
        ></vSelect>
        <div class="form__errors" v-if="$v.selectedPerson.$error">
          <span class="form__error" v-if="!$v.selectedPerson.required">Field is required</span>
        </div>
      </div>
      <div class="form__field">
        <button type="submit">Submit</button>
      </div>
      <div class="form__filed">
        <p class="form__status" v-if="submitStatus === 'OK'">Thanks for your submission!</p>
        <p class="form__status" v-if="submitStatus === 'ERROR'">Please fill the form correctly.</p>
        <p class="form__status" v-if="submitStatus === 'PENDING'">Sending...</p>
      </div>

    </form>
</template>
<script>
import vSelect from 'vue-select';
import { validationMixin } from 'vuelidate';
import { required, minLength } from 'vuelidate/lib/validators';

export default {
  name: 'Form',
  components: {
    vSelect,
  },
  props: {
    edit: Boolean,
  },
  mixins: [validationMixin],
  data() {
    return {
      activeTicket: null,
      title: null,
      description: null,
      option: null,
      submitStatus: null,
      people: [],
      selectedPerson: null,
      severity: [
        'low',
        'medium',
        'high',
      ],
      selectedSeverity: null,
      status: [
        'new',
        'acknowledged',
        'in progress',
        'closed',
        'attachments',
      ],
      notes: null,
      file: null,
      selectedStatus: null,
      ticket: null,
    };
  },
  validations: {
    title: {
      required,
      minLength: minLength(3),
    },
    description: {
      required,
      minLength: minLength(3),
    },
    selectedSeverity: {
      required,
    },
    selectedStatus: {
      required,
    },
    selectedPerson: {
      required,
    },
  },
  created() {
    this.$store.dispatch('getUsers').then(
      () => {
        this.setPeople();
      },
    );
    if (this.$props.edit) {
      const index = this.$store.getters.getTicketIndex;
      const ticket = this.$store.getters.activeTicket(index);
      this.title = ticket.title;
      this.description = ticket.description;
      this.selectedSeverity = ticket.severity;
      this.selectedStatus = ticket.status;
      this.selectedPerson = ticket.user;
      this.notes = ticket.notes;
      this.file = ticket.file;
    }
  },
  methods: {
    processFile(e) {
      // eslint-disable-next-line prefer-destructuring
      this.file = e.target.files[0];
    },
    setPeople() {
      this.people = this.$store.state.users;
    },
    checkForm() {
      this.$v.$touch();
      if (this.$v.$invalid) {
        this.submitStatus = 'ERROR';
      } else {
        this.submitStatus = 'PENDING';
        this.ticket = {
          id: new Date().getTime(),
          title: this.title,
          description: this.description,
          severity: this.selectedSeverity,
          status: this.selectedStatus,
          user: this.selectedPerson,
          notes: this.notes,
          file: this.file,
        };
        if (this.$props.edit) {
          this.activeTicket = this.$store.state.activeTicket;
          this.ticket.id = this.activeTicket;
          this.updateTicket(this.ticket);
        } else {
          this.$store.commit('ADD_TICKET', this.ticket);
        }
        setTimeout(() => {
          this.resetForm();
          setTimeout(() => {
            this.submitStatus = null;
          }, 2000);
        }, 500);
      }
    },
    resetForm() {
      this.title = null;
      this.description = null;
      this.selectedSeverity = null;
      this.selectedStatus = null;
      this.selectedPerson = null;
      this.submitStatus = 'OK';
      this.$v.$reset();
    },
    updateTicket(ticket) {
      this.$store.commit('UPDATE_TICKET', ticket);
      // I had to add this mutation because computed doesn't respond if I update data in vuex
      this.$store.commit('ADD_AND_REMOVE', ticket);
    },
  },
};
</script>

<style lang="scss">
  @import "vue-select/src/scss/vue-select.scss";
  @import '../assets/styles/variables.scss';
  .form {
    width: 100%;
    &__field {
      width: 100%;
      display: flex;
      flex-direction: column;
      margin-bottom: $gap;
      position: relative;
      &:nth-of-type(6) {
        &::after {
          content: unset;
        }
      }
    }
    &__title {
      font-weight: 700;
      margin-bottom: $gap;
      &--error {
        color: $red;
      }
    }
    &__select {
      position: relative;
      div {
        border-radius: unset;
      }
    }
    &__select,
    &__input {
      width: 100%;
      margin-bottom: $gap;
    }
    &__input {
      border: 1px solid $border;
      white-space: normal;
      line-height: 1.4;
      font-size: 1em;
      padding: 4px 7px;
      &::after {
        position: absolute;
        bottom: 0;
        width: 0;
        height: 2px;
        align-self: center;
        background-color: $grey;
        transition: width 250ms ease-in-out;
        transform-origin: center;
        content: '';
      }
      &:focus {
        &::after {
          width: 100%;
        }
      }
      &--error {
        border-color: $red;
        div:nth-of-type(1) {
          border-color: $red;
        }
      }
    }
    &__error {
      color: $red;
    }
  }
</style>
