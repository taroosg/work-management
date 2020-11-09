import { Injectable } from '@nestjs/common';
import { Work_post } from 'src/entities/work_post.entity';
import { Repository, InsertResult, UpdateEvent, UpdateResult } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { WorkPostDTO, SlackPostDTO } from './work-post.dto';
import { WebClient, WebAPICallResult } from '@slack/web-api';

@Injectable()
export class WorkPostService {
  constructor(
    @InjectRepository(Work_post)
    private readonly workPostRepository: Repository<Work_post>,
  ) { }

  async findAll(): Promise<Work_post[]> {
    return await this.workPostRepository.find({
      relations: ['student_id', 'student_id.class_id'],
    });
  }

  async find(id: number): Promise<Work_post> | null {
    return await this.workPostRepository.findOne({
      where: { post_id: id },
      relations: ['student_id', 'student_id.class_id'],
    });
  }

  async findByNameAndWork(student_id: number, work_number: number): Promise<false | number> {
    const result = await this.workPostRepository.find({
      where: {
        student_id: student_id,
        work_number: work_number,
      }
    })
    return result.length === 0 ? false : result[0].post_id;
  }

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

  async update(post_id: number, work_post): Promise<UpdateResult> {
    return await this.workPostRepository.update(post_id, work_post);
  }

  // slack投稿関数
  async postToSlack(postData: SlackPostDTO): Promise<WebAPICallResult> {
    const client = new WebClient(postData.slack_token);
    const params = {
      channel: postData.slack_channel,
      text: [
        `Name: ${postData.student_name}`,
        `KadaiNo. ${postData.work_number}`,
        `URL: ${postData.work_url}`,
        `Review: ${postData.review}`,
        `Comment: ${postData.comment}`,
      ].join('\n'),
    };
    return await client.chat.postMessage(params);
  }

}
