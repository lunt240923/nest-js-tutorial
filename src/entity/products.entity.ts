import {Entity, PrimaryGeneratedColumn, Column, BaseEntity} from 'typeorm'

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
}