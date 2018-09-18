import {combineReducers} from 'redux';

import {recipesReducer} from './recipes/recipes-reducer';
import {ingredientsReducer} from './ingredients/ingredients-reducer';

export const rootReducer = combineReducers({
    recipes: recipesReducer,
    ingredients: ingredientsReducer
});