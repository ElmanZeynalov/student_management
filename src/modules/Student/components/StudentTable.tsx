'use client';
import TableContainer from '@mui/material/TableContainer';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import TableBody from '@mui/material/TableBody';
import * as React from 'react';
import {useStudentData} from "@/hooks/useStudentData";

export const StudentTable = () => {

	const students = useStudentData();

	return (
		<TableContainer component={Paper}>
			<Table sx={{ minWidth: 650 }} aria-label="simple table">
				<TableHead>
					<TableRow>
						<TableCell align="right">Student Name</TableCell>
						<TableCell align="right">Student Surname</TableCell>
						<TableCell align="right">Student No</TableCell>
						<TableCell align="right">Class</TableCell>
						<TableCell>action</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{students.map((student) => (
						<TableRow key={student.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
							<TableCell align="right">{student.name}</TableCell>
							<TableCell align="right">{student.surname}</TableCell>
							<TableCell align="right">{student.number}</TableCell>
							<TableCell align="right">{student.class}</TableCell>
							<TableCell>action</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
};
