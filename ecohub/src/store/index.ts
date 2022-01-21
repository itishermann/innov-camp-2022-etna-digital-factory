import { combineReducers, configureStore, Middleware } from '@reduxjs/toolkit';
import householdReducer from './household.slice';
import applianceReducer from './appliance.slice';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { FLUSH, PAUSE, PERSIST, PersistConfig, persistReducer, persistStore, PURGE, REGISTER, REHYDRATE } from 'redux-persist';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

const persistConfig: PersistConfig<any> = {
  key: '@ecohub-data',
  storage: AsyncStorage,
  whitelist: ['appliance', 'household'],
  blacklist: [],
};

const middlewares: Middleware[] = [];

const rootReducer = combineReducers({
  household: householdReducer,
  appliance: applianceReducer,
});

const persistedReducer = persistReducer(persistConfig, (state, action) => {
  if (action.type === 'FLUSH') {
    return rootReducer(undefined, action);
  }
  return rootReducer(state, action);
});

const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(...middlewares),
});

const persistor = persistStore(store);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof rootReducer>;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export { store, persistor };