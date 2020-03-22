import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex, axios);

export default new Vuex.Store({
  state: {
    users: null,
    tickets: [],
    activePerson: 'All users',
    sortBy: 'index',
    sortDir: 'asc',
  },
  mutations: {
    SET_ACTIVE_PERSON(state, person) {
      state.activePerson = person;
    },
    SET_USERS(state, users) {
      state.users = users;
    },
    ADD_TICKET(state, ticket) {
      state.tickets.push(ticket);
    },
    REMOVE_TICKET(state, ticketID) {
      state.tickets.filter((ticket) => ticket.id !== ticketID);
    },
    CHANGE_SORTING(state, sortBy) {
      state.sortBy = sortBy;
    },
    CHANGE_SORT_DIR(state, sortDir) {
      state.sortDir = sortDir;
    },
    // UPDATE_TICKET(state, ticket) {
    //   state.tickets =
    // },
  },
  actions: {
    getUsers({ commit }) {
      if (this.state.users === null) {
        return axios
          .get('https://jsonplaceholder.typicode.com/users')
          .then((result) => {
            const users = [];
            result.data.forEach((item) => {
              users.push(item.name);
            });
            commit('SET_USERS', users);
          })
          .catch((error) => {
            throw new Error(`Json placeholder error: ${error}`);
          });
      }
      return false;
    },
    getTasks({ commit }) {
      return axios
        .get('../tasks.json')
        .then((result) => {
          const tasks = result.data;
          tasks.forEach((task) => {
            commit('ADD_TICKET', task);
          });
        })
        .catch((error) => {
          throw new Error(`Import tasks: ${error}`);
        });
    },
  },
  getters: {
    sortedTickets(state) {
      return state.ticketsByAcitveUser
        .sort((a, b) => {
          let modifier = 1;
          if (state.sortDir === 'dsc') modifier = -1;
          if (a[state.sortBy] < b[state.sortBy]) return -1 * modifier;
          if (a[state.sortBy] > b[state.sortBy]) return 1 * modifier;
          return 0;
        });
    },
    numberOfTickets: (state) => state.tickets.length,
    searchByUser(state) {
      return (keyword) => state.tickets.filter((item) => {
        if (keyword === 'All users') {
          return item;
        }
        return item.user === keyword && item.user !== 'All users';
      });
    },
    numberOfTickesPerUser(state) {
      return (keyword) => state.tickets
        .filter((item) => item.user === keyword).length;
    },
  },
});
