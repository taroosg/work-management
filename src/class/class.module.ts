import { Module } from '@nestjs/common';
import { ClassController } from './class.controller';
import { ClassService } from './class.service';
import { Class } from "src/entities/class.entity";
import { TypeOrmModule } from "@nestjs/typeorm";

@Module({
  controllers: [ClassController],
  imports: [TypeOrmModule.forFeature([Class])],
  providers: [ClassService],
})
export class ClassModule { }
