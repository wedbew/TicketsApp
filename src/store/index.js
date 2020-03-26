import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex, axios);

export default new Vuex.Store({
  state: {
    users: null,
    tickets: [],
    activePerson: 'All users',
    activeTicket: null,
    sortBy: 'index',
    sortDir: 'asc',
    openModal: false,
  },
  mutations: {
    SET_ACTIVE_PERSON(state, person) {
      state.activePerson = person;
    },
    SET_ACTIVE_TICKET(state, ticketID) {
      state.activeTicket = ticketID;
    },
    SET_USERS(state, users) {
      state.users = users;
    },
    ADD_TICKET(state, ticket) {
      state.tickets.push(ticket);
    },
    REMOVE_TICKET(state, ticketID) {
      state.tickets = state.tickets.filter((ticket) => ticket.id !== ticketID);
    },
    UPDATE_TICKET(state, ticket) {
      const index = state.tickets.findIndex((item) => item.id === ticket.id);
      state.tickets[index] = ticket;
    },
    // I had to add this mutation because computed doesn't respond if I update data in vuex
    ADD_AND_REMOVE(state, ticket) {
      state.tickets.push(ticket);
      state.tickets.pop(ticket);
    },
    CHANGE_SORTING(state, sortBy) {
      state.sortBy = sortBy;
    },
    CHANGE_SORT_DIR(state, sortDir) {
      state.sortDir = sortDir;
    },
    UPDATE_MODAL(state, modal) {
      state.openModal = modal;
    },
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
    getTicketIndex(state) {
      const checkID = (item) => item.id === state.activeTicket;
      return state.tickets.findIndex(checkID);
    },
    activeTicket(state) {
      return (index) => state.tickets[index];
    },
  },
});
