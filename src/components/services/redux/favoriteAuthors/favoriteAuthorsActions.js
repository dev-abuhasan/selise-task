import axios from 'axios';
import {
    ADD_FAVORITE_AUTHORS,
    REMOVE_FAVORITE_AUTHORS,
    RESET_FAVORITE_AUTHORS,
} from './favoriteAuthorsType';

export const addToFavAuthors = id => async (dispatch, getState) => {
    try {
        const { data } = await axios.get(
            `http://api.quotable.io/authors/${id}`
        );
        dispatch({
            type: ADD_FAVORITE_AUTHORS,
            payload: {
                id: data._id,
                name: data.name,
                link: data.link,
                bio: data.bio,
                description: data.description
            },
        });
        // toast.success('Added to favorite authors');

        localStorage.setItem(
            'favorite_authors',
            JSON.stringify(getState().favoriteAuthors.favoriteAuthors)
        );
    } catch (err) {
        console.error(err.message);
    }
};

export const removeFavAuthors = id => async (dispatch, getState) => {
    try {
        dispatch({
            type: REMOVE_FAVORITE_AUTHORS,
            payload: id,
        });
        localStorage.setItem(
            'favorite_authors',
            JSON.stringify(getState().favoriteAuthors.favoriteAuthors)
        );
    } catch (err) {
        console.error(err.message);
    }
};

export const favAuthorsReset = () => dispatch => {
    try {
        dispatch({ type: RESET_FAVORITE_AUTHORS });

        localStorage.removeItem('favorite_authors');
    } catch (err) {
        console.error(err.message);
    }
};