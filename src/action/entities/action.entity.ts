import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class ActionEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  actionCode: string;

  @Column()
  description: string;
}
