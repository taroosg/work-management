import { Module } from '@nestjs/common';
import { WorkPostController } from './work-post.controller';
import { WorkPostService } from './work-post.service';
import { Work_post } from 'src/entities/work_post.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
@Module({
  controllers: [WorkPostController],
  imports: [TypeOrmModule.forFeature([Work_post])],
  providers: [WorkPostService],
})
export class WorkPostModule {}
