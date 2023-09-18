import { Controller, Get, Post, Put, Delete, Param, Body, ParseIntPipe , ValidationPipe} from '@nestjs/common';
import { ProductsService } from './products.service';
import { ResponseData } from 'src/global/globalClass';
import { HttpMessage, HttpStatus } from 'src/global/globalEnum';
import { Product } from 'src/model/products.model';
import { ProductDto } from 'src/dto/productDto.dto';
import { ProductsEntity } from 'src/entity/products.entity';

@Controller('products')
export class ProductsController {

    constructor(private readonly productsService: ProductsService){}

    @Get()
    async getProducts(): Promise<ResponseData<Product[]>> {
        try {
            return new ResponseData<ProductsEntity[]>(await this.productsService.findAll(), HttpStatus.SUCCESS, HttpMessage.SUCCESS);
        } catch (error) {
            return new ResponseData<Product[]>(null, HttpStatus.ERROR, HttpMessage.ERROR);
        }
    }

    // @Get('/:id')
    // async getProduct(@Param('id', new ParseIntPipe()) id: number): Promise<ResponseData<Product[]>> {
    //     try {
    //         return new ResponseData<ProductsEntity>(await this.productsService.findOne(id), HttpStatus.SUCCESS, HttpMessage.SUCCESS);
    //     } catch (error) {
    //         return new ResponseData<Product>(null, HttpStatus.ERROR, HttpMessage.ERROR);
    //     }
    // }

    // @Post()
    // postProduct(@Body(new ValidationPipe()) productDto: ProductDto): ResponseData<Product> {
    //     try {
    //         return new ResponseData<Product>(this.productsService.postProduct(productDto), HttpStatus.SUCCESS, HttpMessage.SUCCESS);
    //     } catch (error) {
    //         return new ResponseData<Product>(null, HttpStatus.ERROR, HttpMessage.ERROR);
    //     }
    // }

    // @Put('/:id')
    // putProduct(@Body(new ValidationPipe()) product: ProductDto, @Param('id', new ParseIntPipe()) id: number): ResponseData<Product> {
    //     try {
    //         return new ResponseData<Product>(this.productsService.putProduct(id, product), HttpStatus.SUCCESS, HttpMessage.SUCCESS);
    //     } catch (error) {
    //         return new ResponseData<Product>(null, HttpStatus.ERROR, HttpMessage.ERROR);
    //     }
    // }

    // @Delete('/:id')
    // deleteProduct(@Param('id', new ParseIntPipe()) id: number): ResponseData<string> {
    //     try {
    //         return new ResponseData<string>(this.productsService.deleteProduct(id), HttpStatus.SUCCESS, HttpMessage.SUCCESS);
    //     } catch (error) {
    //         return new ResponseData<string>(null, HttpStatus.ERROR, HttpMessage.ERROR);
    //     }
    // }
}
