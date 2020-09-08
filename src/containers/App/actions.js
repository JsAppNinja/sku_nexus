import { CALCULATION, GET_USER_DATA } from './constants';

/**
 * Calculation
 *
 * @return {object} An action object with a type of CALCULATION
 */
export function calculation(value) {
    return {
        type: CALCULATION,
        payload: {
            value,
        },
    };
}

/**
 * getUserData
 *
 * @return {object} An action object with a type of GET_USER_DATA
 */
export function getUserData(searchKey) {
    return {
        type: GET_USER_DATA,
        payload: { searchKey },
    };
}
