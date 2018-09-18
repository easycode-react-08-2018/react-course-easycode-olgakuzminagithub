const initialState = [
        {id: 1, name: 'свекала'},
        {id: 2, name: 'картошка'},
        {id: 3, name: 'морковь'},
        {id: 4, name: 'капуста'},
        {id: 5, name: 'помидор'},
        {id: 6, name: 'свинина'},
        {id: 7, name: 'лук'}
];

export const ingredientsReducer = (state = initialState, action) => {
    switch (action.type) {
        default: {
            return state;
        }
    }
};