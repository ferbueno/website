export default {
  namespace: 'theme',

  state: {
    theme: 'light',
  },

  effects: {
    *changeTheme({ payload }, { put }) {

    },
  },

  reducers: {
    updateTheme(state, { payload }) {
      return {
        ...state,
        theme: payload,
      };
    },
  },
};
