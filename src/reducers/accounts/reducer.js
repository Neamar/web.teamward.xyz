import { handleActions } from 'redux-actions';
import { addAccount } from './actions';

const getSaveAccounts = () => {
  // Make sure we don't have garbage in localStorage
  try {
    const accounts = JSON.parse(window.localStorage.teamwardAccounts);
    if (Array.isArray(accounts)) {
      return accounts;
    }
    return [];
  } catch (e) {
    return [];
  }
};

const defaultState = {
  accounts: getSaveAccounts(),
};

export default handleActions({
  [addAccount]: (state, { payload }) => {
    if (state.accounts.some((account) => account.name === payload.name && account.region === payload.region)) {
      // Account already added, do nothing
      return state;
    }
    const newAccounts = [...state.accounts, payload];
    window.localStorage.teamwardAccounts = JSON.stringify(newAccounts);
    return ({
      ...state,
      accounts: newAccounts,
    });
  },
}, defaultState);
