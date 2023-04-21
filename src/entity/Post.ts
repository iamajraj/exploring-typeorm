import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./User";

@Entity()
export class Post {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column({ default: new Date() })
  createdAt: Date;

  @Column({ update: true, default: new Date() })
  updatedAt: Date;

  @ManyToOne(() => User, (author) => author.post)
  author: User;
}
