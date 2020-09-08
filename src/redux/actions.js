import * as CONSTANTS from './constants';

/**
 * getAllUsers
 *
 * @return {object} An action object with a type of GET_ALL_USERS
 */
const getAllUsers = () => {
    return {
        type: CONSTANTS.GET_ALL_USERS,
    };
};

/**
 * searchUser
 *
 * @return {object} An action object with a type of SEARCH_USER
 */
const searchUser = (ccNumber) => {
    return {
        type: CONSTANTS.SEARCH_USER,
        payload: ccNumber,
    };
};

/**
 * getUser
 *
 * @return {object} An action object with a type of GET_USER
 */
const getUser = (ccNumber) => {
    return {
        type: CONSTANTS.GET_USER,
        payload: ccNumber,
    };
};

/**
 * addProduct
 *
 * @return {object} An action object with a type of ADD_PRODUCT
 */
const addProduct = (name, cost) => {
    return {
        type: CONSTANTS.ADD_NEW_PRODUCT,
        name,
        cost,
    };
};

/**
 * editProduct
 *
 * @return {object} An action object with a type of EDIT_PRODUCT
 */
const editProduct = (id, name, cost) => {
    return {
        type: CONSTANTS.EDIT_PRODUCT,
        id,
        name,
        cost,
    };
};

/**
 * removeProduct
 *
 * @return {object} An action object with a type of REMOVE_PRODUCT
 */
const removeProduct = (ccNumber) => {
    return {
        type: CONSTANTS.REMOVE_PRODUCT,
        payload: ccNumber,
    };
};

export default {
    getAllUsers,
    searchUser,
    getUser,
    addProduct,
    editProduct,
    removeProduct,
};
