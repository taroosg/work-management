import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WorkPostModule } from './work-post/work-post.module';
import { ClassModule } from './class/class.module';

@Module({
  imports: [TypeOrmModule.forRoot(), WorkPostModule, ClassModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
