import { createStore, createTypedHooks } from 'easy-peasy';

import type { UserStore } from './user';
import { user } from './user';

interface StoreModel {
  user: UserStore;
}

const typedHooks = createTypedHooks<StoreModel>();
const { useStoreActions, useStoreDispatch, useStoreState } = typedHooks;
export { useStoreActions, useStoreDispatch, useStoreState };

export default createStore<StoreModel>({
  user,
});
