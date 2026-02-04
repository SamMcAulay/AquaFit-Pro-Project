import { CoursesService } from './courses.service';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
export declare class CoursesController {
    private readonly coursesService;
    constructor(coursesService: CoursesService);
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
    findOne(id: string): {
        id: number;
        name: string;
        instructor: string;
        capacity: number;
        description: string;
        startDate: Date;
    };
    update(id: string, updateCourseDto: UpdateCourseDto): {
        startDate: Date;
        name: string;
        instructor: string;
        description: string;
        capacity: number;
        id: number;
    };
    remove(id: string): {
        id: number;
        name: string;
        instructor: string;
        capacity: number;
        description: string;
        startDate: Date;
    };
}
