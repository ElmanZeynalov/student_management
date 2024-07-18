import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IStudent } from '../modules/Student/types/student';

interface StudentState {
	map(arg0: (student: any) => import('react').JSX.Element): import('react').ReactNode;
	student: IStudent[];
}
const initialState: StudentState = {
	student: [],
};

const studentsSlice = createSlice({
	name: 'students',
	initialState,
	reducers: {
		addStudent: (state, action: PayloadAction<IStudent>) => {
			state.student.push(action.payload);
		},
	},
});

export const { addStudent } = studentsSlice.actions;
export default studentsSlice.reducer;
