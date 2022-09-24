const STATUS_CHEKCKED = 'categories/STATUS_CHEKCKED';

const categoriesReducer = (state = '', action) => {
  switch (action.type) {
    case STATUS_CHEKCKED:
      return action.status;
    default:
      return state;
  }
};

export const checkStatus = (status) => ({ type: STATUS_CHEKCKED, status });

export default categoriesReducer;
