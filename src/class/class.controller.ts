import {
  Controller,
  Get,
} from "@nestjs/common";
import { ClassService } from "./class.service";
import { Class } from "../entities/class.entity";

@Controller('class')
export class ClassController {
  constructor(private readonly service: ClassService) { }

  @Get()
  async getClassList(): Promise<Class[]> {
    return await this.service.findCurrentClass();
  }

}
