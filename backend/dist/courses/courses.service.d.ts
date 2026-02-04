import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
export declare class CoursesService {
    private courses;
    create(createCourseDto: CreateCourseDto): {
        startDate: Date;
        name: string;
        instructor: string;
        description: string;
        capacity: number;
        id: number;
    };
    findAll(): {
        id: number;
        name: string;
        instructor: string;
        capacity: number;
        description: string;
        startDate: Date;
    }[];
    findOne(id: number): {
        id: number;
        name: string;
        instructor: string;
        capacity: number;
        description: string;
        startDate: Date;
    };
    update(id: number, updateCourseDto: UpdateCourseDto): {
        startDate: Date;
        name: string;
        instructor: string;
        description: string;
        capacity: number;
        id: number;
    };
    remove(id: number): {
        id: number;
        name: string;
        instructor: string;
        capacity: number;
        description: string;
        startDate: Date;
    };
}
