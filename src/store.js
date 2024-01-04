import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "./features/Slices/movieSlice";
import peopleReducer from "./features/Slices/peopleSlice";
import createSagaMiddleware from "@redux-saga/core";
import rootSaga from "./rootSaga";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    movies: moviesReducer,
    people: peopleReducer,    
  },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

export default store;
