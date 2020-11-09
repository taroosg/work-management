import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from "@nestjs/common"; // 編集！
import { ClassService } from "./class.service"; // 追記！
import { Class } from "../entities/class.entity"; // 追記！
// import { CreateItemDTO } from "./item.dto"; // 追記！
import { InsertResult, UpdateResult, DeleteResult } from "typeorm"; // 追記！

@Controller('class')
export class ClassController {
  constructor(private readonly service: ClassService) { }

  @Get()
  async getClassList(): Promise<Class[]> {
    return await this.service.findCurrentClass();
  }

}
