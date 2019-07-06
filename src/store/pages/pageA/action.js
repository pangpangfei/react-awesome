import { UPDATE_PAGE_A_NAME } from './action-type';

export const updatePageAName = (name = 'react-awesome') => ({
  type: UPDATE_PAGE_A_NAME,
  name
});