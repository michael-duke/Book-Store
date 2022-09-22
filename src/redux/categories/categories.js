const STATUS_CHEKCKED = 'book-store/categories/STATUS_CHEKCKED';

const categoriesReducer = (state = '', action) => {
  switch (action.type) {
    case STATUS_CHEKCKED:
      if (state === 'under construction') return '';
      return 'under construction';
    default:
      return state;
  }
};

export const checkStatus = () => ({ type: STATUS_CHEKCKED });

export default categoriesReducer;
