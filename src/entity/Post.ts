import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

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
}
