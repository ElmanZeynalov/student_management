import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IScores } from '@/modules/scores/types/scores';

interface ScoresState {
	scores: IScores[];
}

const initialState: ScoresState = {
	scores: [],
};

const scoresSlice = createSlice({
	name: 'scores',
	initialState,
	reducers: {
		addScore: (state, action: PayloadAction<IScores>) => {
			console.log(state, 'State LOad');
			state.scores.push(action.payload);
		},
	},
});

export const { addScore } = scoresSlice.actions;
export default scoresSlice.reducer;
