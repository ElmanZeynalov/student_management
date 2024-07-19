'use client';

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useDialog } from '@/hooks/useDialog';
import { ScoreTable } from '@/modules/scores/components/ScoreTable';
import ScoreFormDialog from '@/modules/scores/components/ScoreFormDialog';

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
				<ScoreTable />
			</Stack>
			<ScoreFormDialog isOpen={scoreFormDialog.isOpen} onClose={scoreFormDialog.close} />
		</>
	);
};

export default ScoresPage;
