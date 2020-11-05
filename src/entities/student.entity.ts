import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Class } from './class.entity';
import { Work_post } from './work_post.entity';

@Entity()
export class Student {
  @PrimaryGeneratedColumn()
  readonly student_id: number;

  @Column()
  student_name: string;

  @ManyToOne((type) => Class, (class_id) => class_id.students)
  @JoinColumn({ name: 'class_id' })
  readonly class_id?: Class;

  @Column()
  student_number: number;

  @OneToMany((type) => Work_post, (work_post) => work_post.student_id)
  work_posts?: Work_post[];
}
