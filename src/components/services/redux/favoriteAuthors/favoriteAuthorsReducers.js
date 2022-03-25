import toast from 'react-hot-toast';
import {
    ADD_FAVORITE_AUTHORS,
    REMOVE_FAVORITE_AUTHORS,
    RESET_FAVORITE_AUTHORS,
} from './favoriteAuthorsType';

const initialState = {
    favoriteAuthors: [],
};
export const favoriteAuthorsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_FAVORITE_AUTHORS:
            const item = action.payload;

            const existingItem = state.favoriteAuthors.find(
                x => x.id === item.id
            );
            if (existingItem) {
                toast.error('Already favorite authors');
                return {
                    ...state,
                    favoriteAuthors: state.favoriteAuthors.map(x =>
                        x.id === existingItem.id ? item : x
                    ),
                };
            } else {
                toast.success('Added to favorite authors');
                return { ...state, favoriteAuthors: [...state.favoriteAuthors, item] };
            }

        case REMOVE_FAVORITE_AUTHORS:
            return {
                ...state,
                favoriteAuthors: state.favoriteAuthors.filter(x => x.id !== action.payload),
            };
        case RESET_FAVORITE_AUTHORS:
            return {
                ...state,
                favoriteAuthors: [],
            };

        default:
            return state;
    }
};