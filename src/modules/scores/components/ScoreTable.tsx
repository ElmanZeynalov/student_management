import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import TableBody from '@mui/material/TableBody';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableContainer from '@mui/material/TableContainer';

import { useScoresData } from '@/hooks/useScoreData';

export const ScoreTable = () => {
	const { scores, students, lessons } = useScoresData();

	return (
		<TableContainer component={Paper}>
			<Table sx={{ minWidth: 650 }} aria-label="simple table">
				<TableHead>
					<TableRow>
						<TableCell align="right">Student</TableCell>
						<TableCell align="right">Teacher</TableCell>
						<TableCell align="right">Lesson</TableCell>
						<TableCell align="right">Class</TableCell>
						<TableCell align="right">Date-Time</TableCell>
						<TableCell align="right">Score</TableCell>
						<TableCell>action</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{scores.map((scores) => (
						<TableRow key={scores.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
							<TableCell align="right">{scores.student?.name}</TableCell>
							<TableCell align="right">{scores.teacher?.name}</TableCell>
							<TableCell align="right">{scores.lesson.lessonName}</TableCell>
							<TableCell align="right">{scores.class}</TableCell>
							<TableCell align="right">{scores.date}</TableCell>
							<TableCell align="right">{scores.score}</TableCell>
							<TableCell>action</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
};
