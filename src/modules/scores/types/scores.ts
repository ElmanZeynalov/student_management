import { IStudent } from '@/modules/Student/types/student';
import { ILesson } from '@/modules/lessons/types/lesson';

export interface ITeacher {
	id: number;
	name: string;
}

export interface IScores {
	id: number;
	student: IStudent;
	teacher: ITeacher;
	lesson: ILesson;
	class: string;
	date: number;
	score: number;
}
