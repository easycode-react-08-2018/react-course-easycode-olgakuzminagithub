const initialState = [
        {id: '001', name: 'свекала'},
        {id: '002', name: 'картошка'},
        {id: '003', name: 'морковь'},
        {id: '004', name: 'капуста'},
        {id: '005', name: 'помидор'},
        {id: '006', name: 'свинина'},
        {id: '007', name: 'лук'},
        {id: '008', name: 'рис'}

];

export const ingredientsReducer = (state = initialState, action) => {
    switch (action.type) {
        default: {
            return state;
        }
    }
};