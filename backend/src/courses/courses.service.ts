import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';

@Injectable()
export class CoursesService {
  /**
   * MOCK DATABASE
   * Since we don't have a real database connected yet,
   * we use this private array to test the API.
   */
  private courses = [
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

  /**
   * CREATE A NEW COURSE
   * @param createCourseDto - The data sent by the client
   * @returns The newly created course object
   */
  create(createCourseDto: CreateCourseDto) {
    // Generate ID
    const newId = this.courses.length + 1;

    // Create the new course object
    const newCourse = {
      id: newId,
      ...createCourseDto, // Copies name, instructor, description, capacity

      // Convert string "2024-03-01" to real Date object
      startDate: new Date(createCourseDto.startDate),
    };

    // Save to our "Database"
    this.courses.push(newCourse);

    return newCourse;
  }

  /**
   * FIND ALL COURSES
   * @returns An array of all courses
   */
  findAll() {
    return this.courses;
  }

  /**
   * FIND ONE COURSE BY ID
   * @param id - The numeric ID of the course
   * @returns The single course object
   * @throws NotFoundException (404) if ID doesn't exist
   */
  findOne(id: number) {
    const course = this.courses.find((c) => c.id === id);

    if (!course) {
      throw new NotFoundException(`Course with ID #${id} not found`);
    }

    return course;
  }

  /**
   * UPDATE A COURSE
   * @param id - ID of the course to update
   * @param updateCourseDto - Object containing only the fields being changed
   */
  update(id: number, updateCourseDto: UpdateCourseDto) {
    // 1. Find the index of the item
    const index = this.courses.findIndex((c) => c.id === id);

    // 2. Handle 404 error if not found
    if (index === -1) {
      throw new NotFoundException(`Course with ID #${id} not found`);
    }

    // 3. Prepare the updated object
    // We determine the correct date logic right here so TypeScript knows it's always a Date
    const updatedCourse = {
      ...this.courses[index], // Keep old data
      ...updateCourseDto,     // Overwrite with new data

      // If new date exists, make it a Date object. If not, keep the old Date object.
      startDate: updateCourseDto.startDate
        ? new Date(updateCourseDto.startDate)
        : this.courses[index].startDate,
    };

    // 4. Save back to the array
    this.courses[index] = updatedCourse;

    return updatedCourse;
  }

  /**
   * REMOVE A COURSE
   * @param id - ID to delete
   */
  remove(id: number) {
    const index = this.courses.findIndex((c) => c.id === id);

    if (index === -1) {
      throw new NotFoundException(`Course with ID #${id} not found`);
    }

    // Remove 1 item at the specific index
    const deleted = this.courses.splice(index, 1);

    return deleted[0]; // Return the item we just deleted
  }
}
