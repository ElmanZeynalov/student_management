import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ILesson } from '@/modules/lessons/types/lesson';

interface LessonsState {
	lessons: ILesson[];
}

const initialState: LessonsState = {
	lessons: [],
};

const lessonsSlice = createSlice({
	name: 'lessons',
	initialState,
	reducers: {
		addLesson: (state, action: PayloadAction<ILesson>) => {
			state.lessons.push(action.payload);
		},
	},
});

export const { addLesson } = lessonsSlice.actions;
export default lessonsSlice.reducer;
