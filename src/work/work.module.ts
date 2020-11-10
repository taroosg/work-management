import { Module } from '@nestjs/common';
import { WorkController } from './work.controller';
import { WorkService } from './work.service';
import { Work } from "src/entities/work.entity";
import { TypeOrmModule } from "@nestjs/typeorm";

@Module({
  controllers: [WorkController],
  imports: [TypeOrmModule.forFeature([Work])],
  providers: [WorkService]
})
export class WorkModule { }
