/* eslint-disable no-param-reassign */
import type { Action } from 'easy-peasy';
import { action } from 'easy-peasy';

export interface UserStore {
  name: string | null;
  addUserData: Action<UserStore>;
}

export const user: UserStore = {
  name: null,
  addUserData: action((state) => {
    state.name = 'IndiaCan Club';
  }),
};
