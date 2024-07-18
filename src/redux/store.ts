import { configureStore } from '@reduxjs/toolkit';
import studentsReducer from './studentsSlice';
import lessonsReducer from './lessonsSlice';
import scoresReducer from './scoresSlice';
import localStorageMiddleware from './localStorageMiddleware';
import { loadState } from './loadState';

const preloadedState: any = loadState();

export const store = configureStore({
	reducer: {
		students: studentsReducer,
		lessons: lessonsReducer,
		scores: scoresReducer,
	},
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(localStorageMiddleware),
	preloadedState,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
