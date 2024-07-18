import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IStudent } from '../modules/Student/types/student';

const initialState: IStudent[] = [];

const studentsSlice = createSlice({
	name: 'students',
	initialState,
	reducers: {
		addStudent: (state, action: PayloadAction<IStudent>) => {
			state.push(action.payload);
		},
	},
});

export const { addStudent } = studentsSlice.actions;
export default studentsSlice.reducer;
