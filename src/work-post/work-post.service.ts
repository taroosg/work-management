import { Injectable } from '@nestjs/common';
import { Work_post } from 'src/entities/work_post.entity';
import { Repository, InsertResult } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { WorkPostDTO } from './work-post.dto';

@Injectable()
export class WorkPostService {
  constructor(
    @InjectRepository(Work_post)
    private readonly workPostRepository: Repository<Work_post>,
  ) { }
  // テーブルの全データを取得する関数を定義
  async findAll(): Promise<Work_post[]> {
    return await this.workPostRepository.find({
      relations: ['student_id', 'student_id.class_id'],
    });
  }

  // テーブルにアイテムを追加する関数を定義
  async create(work_post: WorkPostDTO): Promise<InsertResult> {
    const newPost = {
      work_number: Number(work_post.work_number),
      work_url: work_post.work_url,
      student_id: Number(work_post.student_id),
      review: work_post.review.toLowerCase() === "true" ? true : false,
      comment: work_post.comment,
    };
    return await this.workPostRepository.insert({ ...(newPost as any) });
  }

  // idを指定してテーブルから1件のデータを取得する関数を定義
  async find(id: number): Promise<Work_post> | null {
    return await this.workPostRepository.findOne({
      where: { post_id: id },
      relations: ['student_id', 'student_id.class_id'],
    });
  }
}
