import { UPDATE_PAGE_A_NAME } from './action-type';

const defaultState = {
    name: 'react'
};

export const pageA = (state = defaultState, action = {}) => {
    const { type, name } = action;
    switch(type) {
        case UPDATE_PAGE_A_NAME:
            return {...state, ...{name}};
        default:
            return state;
    }
}; 