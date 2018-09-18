export const ADD_RECIPE = 'add_recipe';

export const addRecipe = (recipe) => {
    return {
        type: ADD_RECIPE,
        payload: {
            recipe
        }
    };
};