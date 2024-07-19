import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import {ILesson} from "@/modules/lessons/types/lesson";


export const useLessonsData = () => {
    const lessons = useSelector((state: RootState) => state.lessons.lessons) as ILesson[];
    return lessons;
};
