
import {Entity, BaseEntity, PrimaryGeneratedColumn, Column, OneToMany} from 'typeorm';
import { ProductsEntity } from './products.entity';

@Entity('category')
export class CategoryEntity extends BaseEntity {
    @PrimaryGeneratedColumn()
    category_id : number;

    @Column()
    CategoryName: string;

    @OneToMany(type => ProductsEntity, product => product.category_id)
    products: ProductsEntity[];
}