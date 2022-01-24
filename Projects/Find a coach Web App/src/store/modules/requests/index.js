import requestMutations from './mutations.js';
import requestActions from './actions.js';
import requestGatters from './getters.js';

export default {
  namespaced: true,
  state() {
    return {
      requests: [],
    };
  },
  mutations: requestMutations,
  actions: requestActions,
  getters: requestGatters,
};
