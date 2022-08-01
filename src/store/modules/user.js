import { getToken } from '@/utils/cookies';
const state = {
  token: getToken(),
  path: 'home'
};

const mutations = {
  SET_TOKEN: (state, token) => {
    state.token = token;
  },
  SET_PATH: (state, path) => {
    state.path = path;
  }
};

const actions = {

};

export default {
  namespaced: true,
  state,
  mutations,
  actions
};
