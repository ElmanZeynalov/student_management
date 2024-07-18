'use client';
import TableContainer from '@mui/material/TableContainer';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import TableBody from '@mui/material/TableBody';
import * as React from 'react';
import { ILesson } from '../types/lesson';
import { useSelector } from 'react-redux';
import { RootState } from '@reduxjs/toolkit/query';

interface ILessonTableProps {
	value: ILesson[];
}

export const LessonsTable = ({ value }: ILessonTableProps) => {
	return (
		<TableContainer component={Paper}>
			<Table sx={{ minWidth: 650 }} aria-label="simple table">
				<TableHead>
					<TableRow>
						<TableCell align="right">Lesson Name</TableCell>
						<TableCell align="right">Teacher Name</TableCell>
						<TableCell align="right">Teacher number</TableCell>
						<TableCell align="right">Class</TableCell>
						<TableCell>action</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{value.map((lesson) => (
						<TableRow key={lesson.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
							<TableCell align="right">{lesson.lessonName}</TableCell>
							<TableCell align="right">{lesson.teacherName}</TableCell>
							<TableCell align="right">{lesson.teacherNumber}</TableCell>
							<TableCell align="right">{lesson.class}</TableCell>
							<TableCell>action</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
};
