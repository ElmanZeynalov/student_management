'use client';

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useDialog } from '@/hooks/useDialog';
import { ILesson } from '@/modules/lessons/types/lesson';
import { LessonsTable } from '@/modules/lessons/components/LessonsTable';
import LessonFormDialog from '@/modules/lessons/components/LessonFormDialog';

// const LESSONS_DATA: ILesson[] = [
// 	{
// 		id: 1,
// 		teacherName: 'Elman',
// 		lessonName: 'Daldan getmnek',
// 		teacherNumber: 2,
// 		class: 'Random string',
// 	},
// ]

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
				<LessonsTable value={{ ILesson }} />
			</Stack>
			<LessonFormDialog isOpen={lessonFormDialog.isOpen} onClose={lessonFormDialog.close} />
		</>
	);
};

export default LessonsPage;
