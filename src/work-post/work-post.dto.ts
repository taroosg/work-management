import { IsBoolean, IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

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

  @IsNotEmpty()
  @IsString()
  review: string;

  @IsOptional()
  @IsString()
  comment: string;
}

export class SlackPostDTO {
  @IsNotEmpty()
  @IsString()
  slack_token: string

  @IsNotEmpty()
  @IsString()
  slack_channel: string

  @IsNotEmpty()
  @IsString()
  student_name: string

  @IsNotEmpty()
  @IsNumber()
  work_number: number

  @IsNotEmpty()
  @IsString()
  work_url: string

  @IsNotEmpty()
  @IsBoolean()
  review: boolean

  @IsOptional()
  @IsString()
  comment: string

}