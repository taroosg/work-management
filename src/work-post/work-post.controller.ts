import { Controller } from '@nestjs/common';
import { Get, Post, Put, Delete, Body, Param } from '@nestjs/common'; // 編集！
import { WorkPostService } from './work-post.service'; // 追記！
import { Work_post } from '../entities/work_post.entity'; // 追記！
import { WorkPostDTO } from './work-post.dto'; // 追記！
import { InsertResult, UpdateResult, DeleteResult } from 'typeorm'; // 追記！
import { WebClient } from '@slack/web-api';

@Controller('work-post')
export class WorkPostController {
  // サービスの呼び出し
  constructor(private readonly service: WorkPostService) {}

  // `item`のURIへのGETメソッドでデータ全件取得．サービスの`findAll()`関数を実行．
  @Get()
  async getItemList(): Promise<Work_post[]> {
    return await this.service.findAll();
  }

  // `item`のURIへのPOSTメソッドでデータ新規登録．
  @Post()
  async addItem(@Body() post: WorkPostDTO): Promise<InsertResult> {
    const insertResult = await this.service.create(post);
    const findResult = await this.service.find(
      insertResult.identifiers[0].post_id,
    );
    console.log(JSON.stringify(findResult.student_id.class_id));
    const client = new WebClient(findResult.student_id.class_id.slack_token);
    const params = {
      channel: findResult.student_id.class_id.slack_channel,
      text: `Name: ${findResult.student_id.student_name}\nKadaiNo. ${findResult.work_number}\nURL: ${findResult.work_url}`,
    };

    const response = await client.chat.postMessage(params);
    console.log(response);

    return insertResult;
  }

  // `item/id番号`のURIへのGETメソッドでid指定で1件データ取得．
  @Get(':id')
  async getItem(@Param('id') id: string): Promise<Work_post> {
    const result = await this.service.find(Number(id));
    return result;
  }
}
