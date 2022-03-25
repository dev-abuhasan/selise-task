import { combineReducers } from 'redux';
import { getAuthorsReducer } from './authors/authorsReducers';
import { favoriteAuthorsReducer } from './favoriteAuthors/favoriteAuthorsReducers';

export default combineReducers({
    favoriteAuthors: favoriteAuthorsReducer,
    getAuthors: getAuthorsReducer
});