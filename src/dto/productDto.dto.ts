import {IsNumber} from 'class-validator';

export class ProductDto {
    categoriesId?: number;
    productName?: string;
    @IsNumber()
    price?: number;
}