import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryColumn()
  id: number;

  @Column({ length: 15 })
  name: string;

  @Column({ length: 100, nullable: false })
  email: string;

  @Column()
  password: string;
}
