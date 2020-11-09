import { Injectable } from '@nestjs/common';
import { Class } from "src/entities/class.entity"; // 追記！
import { Repository, Raw } from "typeorm"; // 追記！
import { InjectRepository } from "@nestjs/typeorm"; // 追記！

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
      }
    });
  }

}
