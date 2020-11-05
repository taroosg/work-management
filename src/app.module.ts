import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WorkPostModule } from './work-post/work-post.module';

@Module({
  imports: [TypeOrmModule.forRoot(), WorkPostModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
