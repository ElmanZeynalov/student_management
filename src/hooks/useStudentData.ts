import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import { IStudent } from '@/modules/Student/types/student';

export const useStudentData = () => {
	const students = useSelector((state: RootState) => state.students.student) as IStudent[];
	return students;
};
