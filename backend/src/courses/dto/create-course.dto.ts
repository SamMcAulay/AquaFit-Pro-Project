export class CreateCourseDto {
  name: string;
  instructor: string;
  description: string;
  capacity: number;
  startDate: string; // User sends "2024-03-01" (String)
}
