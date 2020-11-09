import {
  Controller,
  Get,
  Param,
} from "@nestjs/common";
import { StudentService } from "./student.service";
import { Student } from "src/entities/student.entity";

@Controller('student')
export class StudentController {
  constructor(private readonly service: StudentService) { }

  @Get(':class_id')
  async getClassList(@Param("class_id") class_id: string): Promise<Student[]> {
    return await this.service.findStudentByClass(Number(class_id));
  }

}
