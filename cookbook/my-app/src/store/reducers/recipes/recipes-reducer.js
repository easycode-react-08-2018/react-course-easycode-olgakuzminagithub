import {ADD_RECIPE} from '../../action/recipes-actions/add-recipe';

const initialState = [
    {
        name: 'Борщ',
        id: '01',
        urlImg: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVO3kVcMvjZwkiZeaCU5FIoG7p4Ca9Imm_8HGC58JbKKR0c_BK',
        ingredients: ['001', '002', '003', '004', '005', '006', '007']

    },
    {
        name: 'Плов',
        id: '02',
        urlImg: 'https://fasol.tv/upload/iblock/8d8/8d8fa2c9a633af37a7ccb55ed290484f.png',
        ingredients: ['003', '005', '006', '007', '008']
    },
];

export const recipesReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_RECIPE: {
            return [...state, action.payload.server];
        }
        default: {
            return state;
        }
    }
};