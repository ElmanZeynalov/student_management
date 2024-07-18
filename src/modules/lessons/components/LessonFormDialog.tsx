import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import React, { FormEvent } from 'react';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import { useDispatch } from 'react-redux';
import { addLesson } from '@/redux/lessonsSlice';
import { IStudent } from '@/modules/Student/types/student';
import { addStudent } from '@/redux/studentsSlice';
import { ILesson } from '@/modules/lessons/types/lesson';

interface LessonFormDialogProps {
	isOpen: boolean;
	onClose: () => void;
}

export default function LessonFormDialog({ isOpen, onClose: handleClose }: LessonFormDialogProps) {
	const dispatch = useDispatch();

	return (
		<Dialog
			open={isOpen}
			onClose={handleClose}
			PaperProps={{
				component: 'form',
				onSubmit: (event: FormEvent<HTMLFormElement>) => {
					event.preventDefault();
					const formData = new FormData(event.currentTarget);
					const formJson = Object.fromEntries((formData as any).entries()) as ILesson;
					dispatch(addLesson({ ...formJson, id: new Date().getTime() }));
					handleClose();
				},
			}}
		>
			<DialogTitle>Student</DialogTitle>
			<DialogContent>
				<TextField
					autoFocus
					required
					margin="dense"
					id="lessonNAme"
					name="lessonName"
					label="Lesson name"
					type="name"
					fullWidth
					variant="standard"
				/>
				<TextField
					autoFocus
					required
					margin="dense"
					id="teacherName"
					name="teacherName"
					label="Teacher Name"
					type="name"
					fullWidth
					variant="standard"
				/>
				<TextField
					autoFocus
					required
					margin="dense"
					id="teacherNumber"
					name="teacherNumber"
					label="Teacher number"
					type="teacherNumber"
					fullWidth
					variant="standard"
				/>
				<TextField
					autoFocus
					required
					margin="dense"
					id="class"
					name="class"
					label="Class"
					fullWidth
					variant="standard"
				/>
			</DialogContent>
			<DialogActions>
				<Button onClick={handleClose}>Cancel</Button>
				<Button type="submit">Create Lessons</Button>
			</DialogActions>
		</Dialog>
	);
}
