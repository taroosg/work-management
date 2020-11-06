import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Student } from './student.entity';

@Entity()
export class Work_post {
  @PrimaryGeneratedColumn()
  readonly post_id: number;

  @Column()
  work_number: number;

  @ManyToOne((type) => Student, (student) => student.work_posts)
  @JoinColumn({ name: 'student_id' })
  student_id?: Student;

  @Column()
  work_url: string;

  @Column()
  review: boolean;

  @Column()
  comment: string;

  @CreateDateColumn()
  readonly createdAt?: Date;

  @UpdateDateColumn()
  readonly updatedAt?: Date;
}
