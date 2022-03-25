import axios from 'axios';
import toast from 'react-hot-toast';
import {
    AUTHORS_REQUEST,
    AUTHORS_SUCCESS,
    AUTHORS_FAIL
} from './authorsType';



// get all academic year list
export const getAuthorsAction = (limit, pageNum) => async dispatch => {
    try {
        dispatch({ type: AUTHORS_REQUEST });
        const config = {
            headers: {
                'Content-Type': 'application/json',
            },
        };

        const { data } = await axios.get(
            `http://api.quotable.io/authors?limit=${limit}&skip=${pageNum * 10}`,
            config
        );
        toast.success(`${data.message ? data.message : '200 authors success'}`)
        dispatch({ type: AUTHORS_SUCCESS, payload: data });
    } catch (err) {
        const error =
            err.response && err.response.data.message
                ? err.response.data.message
                : err.message;
        toast.error(error);
        dispatch({
            type: AUTHORS_FAIL,
            payload: error,
        });
    }
};