'use client';

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import StudentFormDialog from '@/modules/Student/components/StudentFormDialog';
import { useDialog } from '@/hooks/useDialog';
import { StudentTable } from '@/modules/Student/components/StudentTable';

const StudentPage = () => {
	const studentFormDialog = useDialog();

	const handleAddStudentButtonClick = () => {
		studentFormDialog.open();
	};

	return (
		<>
			<Stack spacing={2} direction="column" alignItems="flex-start">
				<Button variant="outlined" onClick={handleAddStudentButtonClick}>
					Add Student
				</Button>
				<StudentTable />
			</Stack>
			<StudentFormDialog isOpen={studentFormDialog.isOpen} onClose={studentFormDialog.close} />
		</>
	);
};

export default StudentPage;
