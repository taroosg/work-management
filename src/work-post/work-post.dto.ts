import { isBoolean, IsBoolean, IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class WorkPostDTO {
  // 空文字NG，string型指定
  @IsNotEmpty()
  @IsNumber()
  work_number: number;

  @IsNotEmpty()
  @IsNumber()
  student_id: number;

  @IsNotEmpty()
  @IsString()
  work_url: string;

  @IsNotEmpty()
  @IsBoolean()
  review: boolean;

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
  @IsNumber()
  student_number: number

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