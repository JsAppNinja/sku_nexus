import * as CONSTANTS from './constants';
import DummyData from 'data/dummyData';

const initialState = {
    users: DummyData,
    user: {
        firstName: '',
        lastName: '',
        email: '',
        ccNumber: '',
        ccType: '',
        cost: 0,
        products: [
            {
                id: '1231',
                name: 'ProductA',
                cost: 212,
            },
        ],
    },
};

function appReducer(state = initialState, action) {
    switch (action.type) {
        case CONSTANTS.GET_USER_DATA:
            return {
                ...state,
            };
        case CONSTANTS.GET_ALL_USERS:
            return {
                ...state,
                users: DummyData,
            };
        case CONSTANTS.SEARCH_USER: {
            const searchedData = [];
            DummyData.forEach((item) => {
                if (item.cc_number.includes(action.payload)) {
                    searchedData.push(item);
                }
            });
            return {
                ...state,
                users: searchedData,
            };
        }
        case CONSTANTS.GET_USER: {
            let searchedData = {};
            DummyData.forEach((item) => {
                if (item.cc_number === action.payload) {
                    searchedData = {
                        ...item,
                        cost: 0,
                        products: state.user.products,
                    };
                }
            });
            return {
                ...state,
                user: searchedData,
            };
        }

        case CONSTANTS.ADD_NEW_PRODUCT: {
            const newProduct = {
                id: state.user.products.length,
                name: action.name,
                cost: action.cost,
            };
            return {
                ...state,
                user: {
                    ...state.user,
                    cost: state.user.cost + action.cost,
                    products: [...state.user.products, newProduct],
                },
            };
        }
        case CONSTANTS.EDIT_PRODUCT: {
            const { id, name, cost } = action;
            const newProducts = state.user.products;

            if (id !== -1) {
                newProducts[id] = {
                    id,
                    name,
                    cost,
                };
            }
            let userCost = 0;
            newProducts.forEach((item) => {
                userCost += item.cost;
            });
            return {
                ...state,
                user: {
                    ...state.user,
                    products: newProducts,
                    cost: userCost,
                },
            };
        }
        case CONSTANTS.REMOVE_PRODUCT: {
            const newProducts = [];
            let userCost = 0;
            state.user.products.forEach((item) => {
                if (item.id !== action.payload) {
                    newProducts.push(item);
                    userCost += item.cost;
                }
            });

            return {
                ...state,
                user: {
                    ...state.user,
                    products: newProducts,
                    cost: userCost,
                },
            };
        }
        default:
            return state;
    }
}

export default appReducer;
