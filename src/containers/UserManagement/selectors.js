import { createSelector } from 'reselect';

const selectGlobal = (state) => state.global;
const getUserListData = () =>
    createSelector(selectGlobal, (globalState) => globalState.users);

export { selectGlobal, getUserListData };
