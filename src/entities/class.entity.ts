import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Student } from './student.entity';

@Entity()
export class Class {
  @PrimaryGeneratedColumn()
  readonly class_id: number;

  @Column()
  class_name: string;

  @Column()
  slack_token: string;

  @Column()
  slack_channel: string;

  @Column()
  readonly start_date?: Date;

  @Column()
  readonly end_date?: Date;

  @OneToMany((type) => Student, (student) => student.class_id)
  students?: Student[];

  constructor(class_name: string, slack_token: string, slack_channel: string) {
    this.class_name = class_name;
    this.slack_token = slack_token;
    this.slack_channel = slack_channel;
  }
}
