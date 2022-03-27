import { useSelector } from 'react-redux';

export const productsListSelector = (state) => {
  return state.productsList;
};
