import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import reducers from './rootReducers';

const favAuthorsFromStorage = localStorage.getItem('favorite_authors')
    ? JSON.parse(localStorage.getItem('favorite_authors'))
    : [];

const middleware = [thunk];
const initial = {
    favoriteAuthors: {
        favoriteAuthors: favAuthorsFromStorage
    },
};

export const store = createStore(
    reducers,
    initial,
    composeWithDevTools(applyMiddleware(...middleware))
);