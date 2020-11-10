import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WorkPostModule } from './work-post/work-post.module';
import { ClassModule } from './class/class.module';
import { StudentModule } from './student/student.module';
import { WorkModule } from './work/work.module';

@Module({
  imports: [TypeOrmModule.forRoot(), WorkPostModule, ClassModule, StudentModule, WorkModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
