import { Injectable } from '@nestjs/common';
import { Class } from "src/entities/class.entity";
import { Repository, Raw } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";

@Injectable()
export class ClassService {
  constructor(
    @InjectRepository(Class)
    private readonly itemRepository: Repository<Class>
  ) { }

  async findCurrentClass(): Promise<Class[]> {
    return await this.itemRepository.find({
      where: {
        start_date: Raw(alias => `${alias} < NOW()`),
        end_date: Raw(alias => `${alias} > NOW()`),
      },
      order: {
        start_date: 'ASC',
      },
    });
  }

}
