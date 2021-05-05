import { Controller, Post, Body, Get} from "@nestjs/common";
import { completion } from "yargs";

import {ProductsService} from './products.service'

// /products
@Controller('products')
export class ProductsController {
    constructor(private readonly productsService : ProductsService){}
    
    @Post()
    addProducts(
        @Body('title') prodTitle: string, 
        @Body('description') prodDesc: string, 
        @Body('price') prodPrice: number): any {
        const generatedId = this.productsService.insertProduct(prodTitle, prodDesc,prodPrice);
        return {id: generatedId}
    }

    @Get()
    getAllProducts(){
        return this.productsService.getProducts();
    }
}