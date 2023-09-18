import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from 'typeorm'

@Entity('accounts')
export class AccountsEntity extends BaseEntity {
    @PrimaryGeneratedColumn()
    product_id: number;
    @Column()
    username: string;
    @Column()
    password: string;
    @Column()
    email: string;
}