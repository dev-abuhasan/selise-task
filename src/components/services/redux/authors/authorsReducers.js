import {
    AUTHORS_REQUEST,
    AUTHORS_SUCCESS,
    AUTHORS_FAIL
} from './authorsType';

// get all academic year list
export const getAuthorsReducer = (state = {}, action) => {
    switch (action.type) {
        case AUTHORS_REQUEST:
            return { loading: true };
        case AUTHORS_SUCCESS:
            return {
                loading: false,
                error: null,
                data: action.payload,
            };
        case AUTHORS_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
};