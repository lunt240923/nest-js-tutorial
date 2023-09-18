import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductDto } from 'src/dto/productDto.dto';
import { ProductsEntity } from 'src/entity/products.entity';
import { Product } from 'src/model/products.model';
import { DataSource, Repository } from 'typeorm';

@Injectable()
export class ProductsService {

    constructor(
        @InjectRepository(ProductsEntity)
        private productRepo : Repository<ProductsEntity>,
        private dataSource: DataSource

    ) {}

    // async createMany(products: ProductsEntity[]) {
    //     const queryRunner = this.dataSource.createQueryRunner();

    //     await queryRunner.connect();
    //     await queryRunner.startTransaction();
    //     try {
    //         await queryRunner.manager.save(products[0]);
    //         await queryRunner.manager.save(products[1]);

    //         await queryRunner.commitTransaction();
    //     } catch (err) {
    //         // since we have errors lets rollback the changes we made
    //         await queryRunner.rollbackTransaction();
    //     } finally {
    //         // you need to release a queryRunner which was manually instantiated
    //         await queryRunner.release();
    //     }
    // }

    findAll(): Promise<ProductsEntity[]> {
        return this.productRepo.find();
    }

    findOne(id: number): Promise<ProductsEntity | null> {
        return this.productRepo.findOneBy({ id });
    }



    // async remove(id: number): Promise<void> {
    //     await this.productRepo.delete(id);
    // }

    // private products : Product[] = [
    //     {
    //         id: 1, categoriesId: 1, productName: "Túi", price: 200000
    //     },
    //     {
    //         id: 2, categoriesId: 1, productName: "Áo", price: 100000
    //     },
    //     {
    //         id: 3, categoriesId: 1, productName: "Quần", price: 400000
    //     }
    // ]

    // getProducts(): Product[] {
    //     return this.products;
    // }

    // getProduct(id:number): Product {
    //     return this.products.find(item => item.id === id);
    // }

    // postProduct(productDto : ProductDto): Product {
    //     const product : Product = {
    //         id: Math.random(),
    //         ...productDto
    //     }
    //     this.products.push(product)
    //     return product;
    // }

    // putProduct(id: number,productDto : ProductDto): Product {
    //     const index = this.products.findIndex(item => item.id === id);
    //     this.products[index].categoriesId = productDto.categoriesId;
    //     this.products[index].productName = productDto.productName;
    //     this.products[index].price = productDto.price;
    //     return productDto;
    // }

    // deleteProduct(id): string {
    //     const index = this.products.findIndex(item => item.id === id);
    //     this.products.splice(index, 1);
    //     return "Deleted";
    // }
}
