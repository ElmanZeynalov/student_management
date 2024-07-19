import {useSelector} from "react-redux";
import {RootState} from "@/redux/store";
import {IScores} from "@/modules/scores/types/scores";
import {IStudent} from "@/modules/Student/types/student";
import {ILesson} from "@/modules/lessons/types/lesson";


export const useScoresData = () => {
    const scores = useSelector((state: RootState) => state.scores.scores) as IScores[];
    const students = useSelector((state: RootState) => state.students.student) as IStudent[];
    const lessons = useSelector((state: RootState) => state.lessons.lessons) as ILesson[];

    return { scores, students, lessons };
};
