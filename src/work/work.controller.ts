import {
  Controller,
  Get,
} from "@nestjs/common";
import { WorkService } from "./work.service";
import { Work } from "../entities/work.entity";

@Controller('work')
export class WorkController {
  constructor(private readonly service: WorkService) { }

  @Get()
  async getWorkNumberList(): Promise<Work[]> {
    return await this.service.findWorkNumberList();
  }

}
