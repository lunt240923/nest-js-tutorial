
import {Entity, BaseEntity, PrimaryGeneratedColumn, Column} from 'typeorm';

@Entity('category')
export class CategoryEntity extends BaseEntity {
    @PrimaryGeneratedColumn()
    category_id : number;

    @Column()
    CategoryName: string;
}