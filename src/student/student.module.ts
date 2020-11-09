import { Module } from '@nestjs/common';
import { StudentController } from './student.controller';
import { StudentService } from './student.service';
import { Student } from "src/entities/student.entity";
import { TypeOrmModule } from "@nestjs/typeorm";

@Module({
  controllers: [StudentController],
  imports: [TypeOrmModule.forFeature([Student])],
  providers: [StudentService]
})
export class StudentModule { }
