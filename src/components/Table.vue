<template>
  <div class="table__container">
    <table class="table">
      <tr class="table__row">
        <th @click="sortBy('index')" class="table__head">
          <div class="table__head--wrapper">
            <span>ID</span>
          </div>
        </th>
        <th @click="sortBy('title')" class="table__head">
          <div class="table__head--wrapper">
            <span>Title</span>
            <Arrows sortBy="title" />
          </div>
        </th>
        <th @click="sortBy('description')" class="table__head">
          <div class="table__head--wrapper">
            <span>Description</span>
            <Arrows sortBy="description" />
          </div>
        </th>
        <th @click="sortBy('user')" class="table__head">
          <div class="table__head--wrapper">
            <span>Assigned to</span>
            <Arrows sortBy="user" />
          </div>
        </th>
        <th @click="sortBy('severity')" class="table__head">
          <div class="table__head--wrapper">
            <span>Severity</span>
            <Arrows sortBy="severity" />
          </div>
        </th>
        <th @click="sortBy('status')" class="table__head">
          <div class="table__head--wrapper">
            <span>Status</span>
            <Arrows sortBy="status" />
          </div>
        </th>
        <th @click="sortBy('notes')" class="table__head">
          <div class="table__head--wrapper">
            <span>Notes</span>
            <Arrows sortBy="notes" />
          </div>
        </th>
        <th class="table__head"></th>
      </tr>
      <tr class="table__row"
        v-for="(ticket, index) in sortedItems"
        :key="index">
        <td class="table__cell" data-label="ID:">
          {{index + 1}}
        </td>
        <td class="table__cell" data-label="Title:">
          {{ticket.title}}
        </td>
        <td class="table__cell" data-label="Desc.:">
          {{ticket.description}}
        </td>
        <td class="table__cell" data-label="Assign:">
          {{ticket.user}}
        </td>
        <td class="table__cell" data-label="Severity:">
          {{ticket.severity}}
        </td>
        <td class="table__cell" data-label="Status:">
          {{ticket.status}}
        </td>
        <td class="table__cell" data-label="Notes:">
          {{ticket.notes}}
        </td>
        <td class="table__cell" data-label="Edit:">
          <span
            @click="tooltip($event, ticket.id)"
            class="icon-more table__more"></span>
        </td>
      </tr>
    </table>
    <Modal
      ref="modal"
      title="Edit task">
      <Form edit />
    </Modal>
    <Tooltip
      ref="tooltip" />
  </div>
</template>

<script>
import Arrows from './Table/Arrows.vue';
import Modal from './Modal.vue';
import Form from './Form.vue';
import Tooltip from './Tooltip.vue';

export default {
  name: 'Table',
  props: {
    data: Array,
  },
  components: {
    Arrows,
    Modal,
    Form,
    Tooltip,
  },
  data() {
    return {
      isEnabled: true,
      indexes: [],
      ticketId: this.$store.activeTicket,
    };
  },
  computed: {
    items() {
      return this.$props.data;
    },
    sortedItems() {
      return this.items.slice().sort((a, b) => {
        let modifier = 1;
        if (this.$store.state.sortDir === 'dsc') modifier = -1;
        if (a[this.$store.state.sortBy] < b[this.$store.state.sortBy]) return -1 * modifier;
        if (a[this.$store.state.sortBy] > b[this.$store.state.sortBy]) return 1 * modifier;
        return 0;
      });
    },
  },
  methods: {
    sortBy(sortBy) {
      if (sortBy === this.$store.state.sortBy) {
        return;
      }
      this.$store.commit('CHANGE_SORTING', sortBy);
    },
    tooltip(event, ticketID) {
      const width = window.innerWidth;
      const { x, y } = event.target.getBoundingClientRect();
      this.$refs.tooltip.openTooltip(x - width, y);
      this.setActiveTicket(event, ticketID);
    },
    setActiveTicket(event, ticketID) {
      if (this.$store.state.activeTicket !== ticketID) {
        this.$store.commit('SET_ACTIVE_TICKET', ticketID);
      }
    },
  },
};
</script>

<style lang="scss">
  @import "vue-select/src/scss/vue-select.scss";
  @import '../assets/styles/variables.scss';
  @import '../assets/styles/globals.scss';
  @import './../assets/icomoon/style.css';
  .table {
    border-collapse: collapse;
    width: 100%;
    &__container {
      width: 100%;
      padding: $gap;
      background-color: $white;
    }
    &__cell, &__head {
      @include rwd('large-phone') {
        display: block !important;
      }
      @include rwd('small-tablet') {
        &:nth-of-type(1) {
          display: none;
        }
      }
      @include rwd('tablet') {
        &:nth-of-type(3),
        &:nth-of-type(7) {
          display: none;
        }
      }
      text-align: left;
      padding: 8px;
    }
    &__head {
      font-weight: 400;
      color: $white;
      background-color: $dark-grey;
      border-right: 1px solid $white;
      cursor: pointer;
      &--wrapper{
        display: flex;
        align-items: center;
        justify-content: space-between;
        span {
          margin-right: 5px;
        }
      }
    }
    &__cell {
      @include rwd('large-phone') {
        position: relative;
        text-align: right;
        &::before {
          position: absolute;
          top: 5px;
          left: 5px;
          font-weight: 700;
          content: attr(data-label);
        }
      }
      z-index: 0;
      border-bottom: 1px solid $grey;
      &:last-of-type {
        @include rwd('large-phone') {
          text-align: right;
        }
        text-align: center;
        cursor: pointer;
        position: relative;
      }
    }
    &__row {
      @include rwd('large-phone') {
        &:first-of-type {
          display:none;
        }
        display: flex;
        flex-direction: column;
      }
      &:nth-child(even) {
        background-color: $light-grey;
      }
    }
    &__more {
      color: $dark-grey;
      padding: 5px ;
      &::before {
        margin: 0 auto;
      }
    }
    &__arrows {
      display: flex;
      flex-direction: column;
    }
    &__arrow {
      font-size: 7px;
      color: $white;
      font-weight: 700;
      cursor: pointer;
      opacity: .5;
      &--active {
        opacity: 1;
      }
      &--up {
        margin-bottom: 5px;
      }
    }
  }
</style>
