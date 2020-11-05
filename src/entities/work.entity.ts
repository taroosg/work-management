import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Work_post } from './work_post.entity';

@Entity()
export class Work {
  @PrimaryGeneratedColumn()
  readonly work_id: number;

  @Column()
  work_number: number;

  @OneToMany((type) => Work_post, (work_post) => work_post.work_number)
  work_posts?: Work_post[];
}
