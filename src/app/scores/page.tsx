'use client';

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import StudentFormDialog from '@/modules/Student/components/StudentFormDialog';
import { useDialog } from '@/hooks/useDialog';
import { StudentTable } from '@/modules/Student/components/StudentTable';
import { IStudent } from '@/modules/Student/types/student';
import { ScoreTable } from '@/modules/scores/components/ScoreTable';
import ScoreFormDialog from '@/modules/scores/components/ScoreFormDialog';
import { IScores } from '@/modules/scores/types/scores';
//
// const SCORES_DATA: IScores[] = [
// 	{
// 		id: 1,
// 		date: 1223312312,
// 		score: 12,
// 		teacher: '',
// 		lesson: '',
// 		class: '',
// 		student: {
// 			id: 1,
// 			name: 'Tofiq',
// 			surname: 'Sofiyev',
// 			number: 0,
// 			class: 'Pişik məktəbi',
// 		},
// 	},
// ];

const ScoresPage = () => {
	const scoreFormDialog = useDialog();

	const handleAddStudentButtonClick = () => {
		scoreFormDialog.open();
	};

	return (
		<>
			<Stack spacing={2} direction="column" alignItems="flex-start">
				<Button variant="outlined" onClick={handleAddStudentButtonClick}>
					Add Scores
				</Button>
				<ScoreTable value={IScores} />
			</Stack>
			<ScoreFormDialog isOpen={scoreFormDialog.isOpen} onClose={scoreFormDialog.close} />
		</>
	);
};

export default ScoresPage;
