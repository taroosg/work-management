import { Injectable } from '@nestjs/common';
import { Student } from "src/entities/student.entity";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";

@Injectable()
export class StudentService {
  constructor(
    @InjectRepository(Student)
    private readonly itemRepository: Repository<Student>
  ) { }

  async findStudentByClass(class_id: number): Promise<Student[]> {
    return await this.itemRepository.find({
      where: {
        class_id: class_id,
      },
      order: {
        student_number: 'ASC',
      },
    });
  };
}
