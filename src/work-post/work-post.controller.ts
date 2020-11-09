import { Controller } from '@nestjs/common';
import { Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { WorkPostService } from './work-post.service';
import { Work_post } from '../entities/work_post.entity';
import { WorkPostDTO, SlackPostDTO, } from './work-post.dto';
import { InsertResult, UpdateResult, DeleteResult } from 'typeorm';
import { WebClient } from '@slack/web-api';

@Controller('work-post')
export class WorkPostController {

  constructor(private readonly service: WorkPostService) { }

  @Get()
  async getItemList(): Promise<Work_post[]> {
    return await this.service.findAll();
  }

  @Post()
  async addItem(@Body() post: WorkPostDTO): Promise<InsertResult> {
    const insertResult = await this.service.create(post);
    const findResult = await this.service.find(
      insertResult.identifiers[0].post_id,
    );
    const postData: SlackPostDTO = {
      slack_token: findResult.student_id.class_id.slack_token,
      slack_channel: findResult.student_id.class_id.slack_channel,
      student_name: findResult.student_id.student_name,
      work_number: findResult.work_number,
      work_url: findResult.work_url,
      review: findResult.review,
      comment: findResult.comment,
    }
    const postSlackResult = await this.service.postToSlack(postData);
    return insertResult;
  }

  @Get(':id')
  async getItem(@Param('id') id: string): Promise<Work_post> {
    const result = await this.service.find(Number(id));
    return result;
  }
}
