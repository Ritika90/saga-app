import createSagaMiddleware from "redux-saga";
import storage from "redux-persist/lib/storage";

import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";

import rootReducer from "middleware/reducers";

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: persistedReducer,
  middleware: (defaultMiddleware) => [
    ...defaultMiddleware({
      serializableCheck: false,
    }),
    sagaMiddleware,
  ],
});
const persistor = persistStore(store);

export { store, persistor, sagaMiddleware };
