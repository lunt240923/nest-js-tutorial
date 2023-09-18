import {Entity, PrimaryGeneratedColumn, Column, BaseEntity, JoinTable} from 'typeorm'
import { CategoryEntity } from './caterory.entity';

@Entity('products')
export class ProductsEntity extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    productName: string;
    @Column()
    price: number;
    @Column()
    category_id: number;

    @JoinTable ()
    caterory: CategoryEntity[]
}