import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    users: [
      {
          id: '1',
          'firstName': 'Dmitry',
          'lastName': 'Abramenko',
          'country': 'Russia',
           selected: true,
        },
        {
          id: '2',
          'firstName': 'Anna',
          'lastName': 'Belous',
          'country': 'USA',
          selected: false,
        },
        {
          id: '3',
          'firstName': 'Elena',
          'lastName': 'Verteyko',
          'country': 'Dubai',
          selected: false,
        },
        {
          id: '4',
          'firstName': 'Olga',
          'lastName': 'Nesterovich',
          'country': 'Belarus',
          selected: false,
        }
      ],
    modalForm: false,
    title: 'Users',
    tableShow: true,
    addItem: false,
  },
  mutations: {
    addUser(state, user) {
      state.users.push(user);
      state.tableShow = !state.tableShow;
      return state.modalForm = !state.modalForm;

    },
    openForm(state) {
      state.addItem = true;
      state.modalForm = !state.modalForm;
      state.tableShow = !state.tableShow;
    },
    sortingUp(state) {
      state.users.sort((a, b) => {
        return a.firstName.charCodeAt(0) - b.firstName.charCodeAt(0);
      });
    },
    sortingDown(state) {
      state.users.sort((a, b) => {
        return b.firstName.charCodeAt(0) - a.firstName.charCodeAt(0);
      });
    },
    deleteAll(state) {
      state.users.filter(user => user.selected === true).forEach(user => state.users.splice(state.users.indexOf(user), 1))
    },
    editForm(state) {
      state.addItem = false;
      state.modalForm = !state.modalForm;
      state.tableShow = !state.tableShow;
    },
    updateUser(state) {

    },
  },
  actions: {
    openForm({commit}) {
      commit('openForm');
    },
    editForm({commit}) {
      commit('editForm');
    },
    dublicate({commit}) {
      commit('dublicate');
    },
    onSort({commit}) {
      commit('onSort');
    },
    onSearch({commit}) {
      commit('onSearch');
    },
    sortingUp({commit}) {
      commit('sortingUp');
    },
    sortingDown({commit}) {
      commit('sortingDown');
    },
    deleteAll({commit}) {
      commit('deleteAll');
    },
    updateUser({commit},firstName, lastName, country, id) {

    }
  },
  getters: {
    users(state) {
      return state.users;
    },
    modalForm(state) {
      return state.modalForm;
    },
    title(state) {
      return state.title;
    },
    tableShow(state) {
      return state.tableShow;
    },
    userById(state) {
      return userId => {
        return state.users.find(user => user.id === userId);
      }
    },
    addItem(state) {
      return state.addItem
    }
    },
});
