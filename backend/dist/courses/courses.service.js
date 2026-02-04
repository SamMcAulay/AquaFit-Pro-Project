"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CoursesService = void 0;
const common_1 = require("@nestjs/common");
let CoursesService = class CoursesService {
    courses = [
        {
            id: 1,
            name: 'Shark Level 1',
            instructor: 'Sarah',
            capacity: 10,
            description: 'Beginner swimming for ages 5-7',
            startDate: new Date('2026-03-01'),
        },
        {
            id: 2,
            name: 'Dolphin Level 2',
            instructor: 'Mike',
            capacity: 8,
            description: 'Intermediate strokes for ages 8-10',
            startDate: new Date('2026-03-05'),
        },
        {
            id: 3,
            name: 'Orca Level 4',
            instructor: 'Cathy',
            capacity: 3,
            description: 'Advanced classes For adults aged 21-50',
            startDate: new Date('2026-03-06'),
        },
    ];
    create(createCourseDto) {
        const newId = this.courses.length + 1;
        const newCourse = {
            id: newId,
            ...createCourseDto,
            startDate: new Date(createCourseDto.startDate),
        };
        this.courses.push(newCourse);
        return newCourse;
    }
    findAll() {
        return this.courses;
    }
    findOne(id) {
        const course = this.courses.find((c) => c.id === id);
        if (!course) {
            throw new common_1.NotFoundException(`Course with ID #${id} not found`);
        }
        return course;
    }
    update(id, updateCourseDto) {
        const index = this.courses.findIndex((c) => c.id === id);
        if (index === -1) {
            throw new common_1.NotFoundException(`Course with ID #${id} not found`);
        }
        const updatedCourse = {
            ...this.courses[index],
            ...updateCourseDto,
            startDate: updateCourseDto.startDate
                ? new Date(updateCourseDto.startDate)
                : this.courses[index].startDate,
        };
        this.courses[index] = updatedCourse;
        return updatedCourse;
    }
    remove(id) {
        const index = this.courses.findIndex((c) => c.id === id);
        if (index === -1) {
            throw new common_1.NotFoundException(`Course with ID #${id} not found`);
        }
        const deleted = this.courses.splice(index, 1);
        return deleted[0];
    }
};
exports.CoursesService = CoursesService;
exports.CoursesService = CoursesService = __decorate([
    (0, common_1.Injectable)()
], CoursesService);
//# sourceMappingURL=courses.service.js.map