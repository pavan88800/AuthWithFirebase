import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from "redux-devtools-extension";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import logger from "redux-logger";
import rootReducer from "./reducers/rootReducer";
import { watchAgeUp } from "./saga";

const persistConfig = {
  key: "root",
  storage
};

// Create the saga middleware
const sagaMiddleware = createSagaMiddleware();

const persistedReducer = persistReducer(persistConfig, rootReducer);

// Mount it on the Store
const store = createStore(
  persistedReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware, logger))
);

const persistor = persistStore(store);
// Run the saga
sagaMiddleware.run(watchAgeUp);

export  { store , persistor };

