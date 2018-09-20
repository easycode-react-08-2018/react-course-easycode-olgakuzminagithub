import {combineReducers} from 'redux';

import {recipesReducer} from './recipes/recipes-reducer';
import {ingredientsReducer} from './ingredients/ingredients-reducer';
import {alert} from "./login/alert.reduser";
import {authentication} from "./login/authentication.reduser";
import {users} from "./login/users.reducer";

export const rootReducer = combineReducers({
    recipes: recipesReducer,
    ingredients: ingredientsReducer,
    alert: alert,
    authentication: authentication,
    users: users
});