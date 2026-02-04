import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';

@Injectable()
export class CoursesService {
  /**
   * MOCK DATABASE 
   * Since we don't have a real database connected yet,
   * we use this private array to test the api's and such.
   */
  private courses = [
    {
      id: 1,
      name: 'Shark Level 1',
      instructor: 'Sarah',
      capacity: 10,
      description: 'Beginner swimming for ages 5-7',
    },
    {
      id: 2,
      name: 'Dolphin Level 2',
      instructor: 'Mike',
      capacity: 8,
      description: 'Intermediate strokes for ages 8-10',
    },
  ];

  /**
   * CREATE A NEW COURSE
   * @param createCourseDto - The data sent by the client  
   * @returns The newly created course object
   */
  create(createCourseDto: CreateCourseDto) {
    // Generate a pseudo-unique ID, In a real DB, Postgres does this automatically
    const newId = this.courses.length + 1;

    // Create the new course object
    const newCourse = {
      id: newId,
      ...createCourseDto, // Spread Syntax Copies all properties from the DTO (name, instructor, etc.)
    };

    // Save to our "Database"
    this.courses.push(newCourse);

    return newCourse; // Return the result so the frontend gets confirmation
  }

  /**
   * FIND ALL COURSES
   * @returns An array of all courses
   */
  findAll() {
    // In a real DB, we would use: return this.repository.find();
    return this.courses;
  }

  /**
   * FIND ONE COURSE BY ID
   * @param id - The numeric ID of the course
   * @returns The single course object
   * @throws NotFoundException (404) if ID doesn't exist
   */
  findOne(id: number) {
    // Array.find() returns 'undefined' if no match is found
    const course = this.courses.find((c) => c.id === id);

    // Guard Clause: If it doesn't exist, stop immediately and throw 404
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
    // Find the index of the item (so we can replace it)
    const index = this.courses.findIndex((c) => c.id === id);

    // Handle 404 error if not found
    if (index === -1) {
      throw new NotFoundException(`Course with ID #${id} not found`);
    }

    // Merge old data with new data
    // - ...this.courses[index] -> Keeps existing data (e.g., ID, created_at)
    // - ...updateCourseDto     -> Overwrites only the fields the user sent
    const updatedCourse = {
      ...this.courses[index],
      ...updateCourseDto,
    };

    // Save back to the array
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

    // Array.splice(index, 1) removes 1 item at the specific index
    const deleted = this.courses.splice(index, 1);

    return deleted[0]; // Return the item we just deleted
  }
}
