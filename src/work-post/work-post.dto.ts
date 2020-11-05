import { IsNotEmpty, IsString } from 'class-validator';

export class WorkPostDTO {
  // 空文字NG，string型指定
  @IsNotEmpty()
  @IsString()
  work_number: string;

  @IsNotEmpty()
  @IsString()
  student_id: string;

  @IsNotEmpty()
  @IsString()
  work_url: string;
}
