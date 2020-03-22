<template>
  <div class="table__container">
    <table class="table">
      <tr class="table__row">
        <th @click="sortBy('index')" class="table__head">
          <div class="table__head--wrapper">
            <span>ID</span>
            <Arrows sortBy="index" />
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
        <th @click="sortBy('assign')" class="table__head">
          <div class="table__head--wrapper">
            <span>Assigned to</span>
            <Arrows sortBy="assign" />
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
        <td class="table__cell">
          {{index + 1}}
        </td>
        <td class="table__cell">
          {{ticket.title}}
        </td>
        <td class="table__cell">
          {{ticket.description}}
        </td>
        <td class="table__cell">
          {{ticket.user}}
        </td>
        <td class="table__cell">
          {{ticket.severity}}
        </td>
        <td class="table__cell">
          {{ticket.status}}
        </td>
        <td class="table__cell">
        </td>
        <td class="table__cell">
          <span class="icon-more table__more"></span>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
// @ is an alias to /src
import Arrows from './Table/Arrows.vue';

export default {
  name: 'Table',
  props: {
    tickets: Array,
  },
  components: {
    Arrows,
  },
  computed: {
    items() {
      return this.$props.tickets;
    },
    sortedItems() {
      return this.$props.tickets.slice().sort((a, b) => {
        let modifier = 1;
        if (this.$store.state.sortDir === 'dsc') modifier = -1;
        if (a[this.$store.state.sortBy] < b[this.$store.state.sortBy]) return -1 * modifier;
        if (a[this.$store.state.sortBy] > b[this.$store.state.sortBy]) return 1 * modifier;
        return 0;
      });
    },
  },
  // created() {
  //   this.$store.dispatch('ticketsByAcitveUser').then(
  //     () => {
  //       this.items();
  //     },
  //   );
  // },
  methods: {
    sortBy(sortBy) {
      if (sortBy === this.$store.state.sortBy) {
        return;
      }
      this.$store.commit('CHANGE_SORTING', sortBy);
    },
    // sortDir(sortDir) {
    //   if (sortDir === this.$store.state.sortDir) {
    //     return;
    //   }
    //   this.$store.commit('CHANGE_SORT_DIR', sortDir);
    // },
  },
};
</script>

<style lang="scss">
  @import '../assets/styles/variables.scss';
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
      }
    }
    &__cell {
      border-bottom: 1px solid $grey;
    }
    &__row {
      &:nth-child(even) {
        background-color: $light-grey;
      }
    }
    &__more {
      color: $blue;
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
