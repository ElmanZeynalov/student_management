'use client';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { FormEvent, useMemo, useState } from 'react';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import Stack from '@mui/material/Stack';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { useDispatch, useSelector } from 'react-redux';
import { addScore } from '@/redux/scoresSlice';
import { ITeacher } from '@/modules/scores/types/scores';
import { IStudent } from '@/modules/Student/types/student';
import { ILesson } from '@/modules/lessons/types/lesson';
import { RootState } from '@/redux/store';

interface IScoreForm {
	student: number;
	teacher: string;
	lesson: number;
	class: string;
	date: number;
	score: number;
}

interface ScoreFormDialogProps {
	isOpen: boolean;
	onClose: () => void;
}

export default function ScoreFormDialog({ isOpen, onClose: handleClose }: ScoreFormDialogProps) {
	const dispatch = useDispatch();
	const students = useSelector((state: RootState) => state.students.student);
	const lessons = useSelector((state: RootState) => state.lessons.lessons);

	const [selectedLesson, setSelectedLesson] = useState<string>('');

	const teachers = useMemo(() => {
		return lessons.map((lesson) => {
			return { name: lesson.teacherName, id: lesson.teacherNumber };
		});
	}, [lessons]);

	const handleLessonChange = (event: SelectChangeEvent) => {
		const value = event.target.value as string;
		setSelectedLesson(value);
	};

	const getStudentById = (id: number) => {
		return students.find((student) => {
			return String(student.id) === String(id);
		});
	};

	const getTeacherById = (id: string) => {
		return teachers.find((student) => {
			return String(student.id) === String(id);
		});
	};

	const getLessonById = (id: number) => {
		return lessons.find((lesson) => {
			return String(lesson.id) === String(id);
		});
	};

	const lessonClass = useMemo(() => {
		const lesson = lessons.find((lesson) => {
			return String(lesson.id) === String(selectedLesson);
		});

		return lesson?.class || '';
	}, [selectedLesson]);

	return (
		<Dialog
			open={isOpen}
			onClose={handleClose}
			fullWidth={true}
			maxWidth="md"
			PaperProps={{
				component: 'form',
				onSubmit: (event: FormEvent<HTMLFormElement>) => {
					event.preventDefault();
					const formData = new FormData(event.currentTarget);
					const formJson = Object.fromEntries((formData as any).entries()) as IScoreForm;

					const student = getStudentById(formJson.student) as IStudent;

					const lesson = getLessonById(formJson.lesson) as ILesson;

					const teacher = getTeacherById(formJson.teacher) as ITeacher;

					dispatch(
						addScore({
							...formJson,
							student,
							lesson,
							teacher,
							id: 123,
						}),
					);
					handleClose();
				},
			}}
		>
			<DialogTitle>Student</DialogTitle>
			<DialogContent>
				<Stack spacing={2}>
					<FormControl fullWidth>
						<InputLabel id="student-select-label">Student</InputLabel>
						<Select labelId="student-select-label" id="student-select" name="student">
							{students.map((student) => {
								return (
									<MenuItem key={student.id} value={student.id}>
										{student.name} {student.surname}
									</MenuItem>
								);
							})}
						</Select>
					</FormControl>

					<FormControl fullWidth>
						<InputLabel id="teacher-select-label">Teacher</InputLabel>
						<Select labelId="teacher-select-label" id="teacher-select" name="teacher">
							{teachers.map((teacher) => {
								return (
									<MenuItem key={teacher.id} value={teacher.id}>
										{teacher.name}
									</MenuItem>
								);
							})}
						</Select>
					</FormControl>

					<FormControl fullWidth>
						<InputLabel id="lesson-select-label">Lesson</InputLabel>
						<Select
							name="lesson"
							labelId="lesson-select-label"
							id="lesson-select"
							value={selectedLesson}
							onChange={handleLessonChange}
						>
							{lessons.map((lesson) => {
								return (
									<MenuItem key={lesson.id} value={lesson.id}>
										{lesson.lessonName}
									</MenuItem>
								);
							})}
						</Select>
					</FormControl>

					<FormControl fullWidth>
						<TextField
							autoFocus
							required
							margin="dense"
							id="class"
							name="class"
							label="Class"
							type="name"
							fullWidth
							variant="standard"
							value={lessonClass}
							inputProps={{ readOnly: true }}
						/>
					</FormControl>

					<FormControl fullWidth>
						<LocalizationProvider dateAdapter={AdapterDayjs}>
							<DatePicker label="Basic date picker" name="date" />
						</LocalizationProvider>
					</FormControl>

					<FormControl fullWidth>
						<TextField
							autoFocus
							required
							margin="dense"
							id="score"
							name="score"
							label="Scores"
							type="number"
							fullWidth
							variant="standard"
						/>
					</FormControl>
				</Stack>
			</DialogContent>
			<DialogActions>
				<Button onClick={handleClose}>Cancel</Button>
				<Button type="submit">Create Lesson</Button>
			</DialogActions>
		</Dialog>
	);
}
