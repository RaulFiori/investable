export const initialState = {
  name: null,
  age: null,
  will: null,
  risk: null,
  inputType: 'text',
  inputLabel: 'Nome',
  step: 'name',
};

export default (state = initialState, action = {}) => {
  const { type, payload } = action;
  switch (type) {
    case 'set_name': {
      const { value } = payload;
      return {
        ...state,
        step: 'age',
        inputType: 'number',
        inputLabel: 'Idade',
        name: value,
      };
    }
    case 'set_age': {
      const { value } = payload;

      return {
        ...state,
        step: 'will',
        age: value,
      };
    }
    case 'set_will': {
      const { value } = payload;

      return { ...state, will: value, step: 'risk' };
    }
    case 'set_risk': {
      const { value } = payload;
      return { ...state, risk: value, step: 'finish' };
    }

    default:
      return state;
  }
};
