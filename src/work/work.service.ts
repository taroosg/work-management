import { Injectable } from '@nestjs/common';
import { Work } from "src/entities/work.entity";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";

@Injectable()
export class WorkService {
  constructor(
    @InjectRepository(Work)
    private readonly itemRepository: Repository<Work>
  ) { }

  async findWorkNumberList(): Promise<Work[]> {
    return await this.itemRepository.find({
      order: {
        work_number: 'ASC',
      },
    });
  }

}
