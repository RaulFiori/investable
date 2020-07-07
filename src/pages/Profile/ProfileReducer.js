export const initialState = {
  email: false,
  push: false,
  sms: false,
};

export default (state = initialState, action = {}) => {
  const { type, payload } = action;

  switch (type) {
    case 'toggle_config': {
      const { key } = payload;
      return { ...state, [key]: !state[key] };
    }

    default:
      return state;
  }
};
