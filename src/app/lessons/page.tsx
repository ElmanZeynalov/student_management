'use client';

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useDialog } from '@/hooks/useDialog';

import { LessonsTable } from '@/modules/lessons/components/LessonsTable';
import LessonFormDialog from '@/modules/lessons/components/LessonFormDialog';

const LessonsPage = () => {
	const lessonFormDialog = useDialog();

	const handleAddStudentButtonClick = () => {
		lessonFormDialog.open();
	};

	return (
		<>
			<Stack spacing={2} direction="column" alignItems="flex-start">
				<Button variant="outlined" onClick={handleAddStudentButtonClick}>
					Add Lessons
				</Button>
				<LessonsTable />
			</Stack>
			<LessonFormDialog isOpen={lessonFormDialog.isOpen} onClose={lessonFormDialog.close} />
		</>
	);
};

export default LessonsPage;
