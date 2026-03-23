import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';

@Injectable()
export class CoursesService {
  constructor(private prisma: PrismaService) {}

  create(dto: CreateCourseDto, instructorId: number) {
    return this.prisma.course.create({
      data: {
        title: dto.title,
        description: dto.description,
        capacity: dto.capacity,
        instructorId,
      },
      include: {
        instructor: {
          select: {
            id: true,
            email: true,
            role: true,
          },
        },
      },
    });
  }

  findAll() {
    return this.prisma.course.findMany({
      include: {
        instructor: {
          select: {
            id: true,
            email: true,
            role: true,
          },
        },
      },
    });
  }

  async findOne(id: number) {
    const course = await this.prisma.course.findUnique({
      where: { id },
      include: {
        instructor: {
          select: {
            id: true,
            email: true,
            role: true,
          },
        },
      },
    });

    if (!course) {
      throw new NotFoundException(`Course with ID #${id} not found`);
    }

    return course;
  }

  async update(id: number, dto: UpdateCourseDto) {
    await this.findOne(id);

    return this.prisma.course.update({
      where: { id },
      data: dto,
      include: {
        instructor: {
          select: {
            id: true,
            email: true,
            role: true,
          },
        },
      },
    });
  }

  async remove(id: number) {
    await this.findOne(id);

    return this.prisma.course.delete({
      where: { id },
    });
  }
}
