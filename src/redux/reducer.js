import * as CONSTANTS from './constants';
import DummyData from 'data/dummyData';

const initialState = {
    users: [],
    searchResult: [],
    user: {
        firstName: '',
        lastName: '',
        email: '',
        ccNumber: '',
        ccType: '',
        cost: 0,
        products: [
            {
                id: 1231,
                name: 'ProductA',
                cost: 212,
            },
        ],
    },
};

function appReducer(state = initialState, action) {
    switch (action.type) {
        case CONSTANTS.GET_ALL_USERS:
            if (state.users && state.users.length > 0) {
                return state;
            } else {
                const storage = localStorage.getItem('users');
                const newState = {
                    ...state,
                    users: DummyData.map((user) => {
                        const products = [];
                        const newUser = { ...user, cost: 0, products };
                        return newUser;
                    }),
                };
                if (!storage) return newState;
                if (JSON.parse(storage)) {
                    return {
                        ...newState,
                        users: JSON.parse(storage),
                    };
                }
            }
            break;
        case CONSTANTS.SEARCH_USER: {
            const searchedData = [];
            if (state.users && state.users.length > 0) {
                state.users.forEach((user) => {
                    if (user.cc_number.includes(action.payload)) {
                        searchedData.push(user);
                    }
                });
                return {
                    ...state,
                    searchResult: searchedData,
                };
            }
            return state;
        }
        case CONSTANTS.GET_USER: {
            let searchedData = {};
            state.users.forEach((item) => {
                if (item.cc_number === action.payload) {
                    searchedData = item;
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
            const newUsers = state.users.map((user) => {
                if (user.cc_number === state.user.cc_number) {
                    return {
                        ...user,
                        cost: user.cost + action.cost,
                        products: [...user.products, newProduct],
                    };
                }
                return user;
            });
            localStorage.setItem('users', JSON.stringify(newUsers));
            return {
                ...state,
                users: newUsers,
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
            const newUsers = state.users.map((user) => {
                if (user.cc_number === state.user.cc_number) {
                    return {
                        ...user,
                        cost: userCost,
                        products: newProducts,
                    };
                }
                return user;
            });
            localStorage.setItem('users', JSON.stringify(newUsers));
            return {
                ...state,
                users: newUsers,
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
            const newUsers = state.users.map((user) => {
                if (user.cc_number === state.user.cc_number) {
                    return {
                        ...user,
                        cost: userCost,
                        products: newProducts,
                    };
                }
                return user;
            });
            localStorage.setItem('users', JSON.stringify(newUsers));
            return {
                ...state,
                users: newUsers,
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
