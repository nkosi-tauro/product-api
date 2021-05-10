import { Controller, Post, Body, Get, Param, Patch, Delete} from "@nestjs/common";
import { completion } from "yargs";

import {ProductsService} from './products.service'

// /products
@Controller('products')
export class ProductsController {
    constructor(private readonly productsService : ProductsService){}
    
    @Post()
    async addProducts(
        @Body('title') prodTitle: string, 
        @Body('description') prodDesc: string, 
        @Body('price') prodPrice: number) {
        const generatedId = await this.productsService.insertProduct(prodTitle, prodDesc,prodPrice);
        return {id: generatedId}
    }

    @Get()
    async getAllProducts(){
        const products = await this.productsService.getProducts();
        return products
    }

    // get single product
    @Get(':id')
    getProduct(@Param('id') prodId: string){
        return this.productsService.getSingleProduct(prodId)
    }

    @Patch(':id')
    updateProduct(
        @Param('id') prodId: string,
        @Body('title') prodTitle: string, 
        @Body('description') prodDesc: string, 
        @Body('price') prodPrice: number):any{
        this.productsService.updateProduct(prodId, prodTitle,prodDesc, prodPrice)
        return null;
    }

    @Delete(':id')
    removeProduct(@Param('id') prodId: string){
        this.productsService.deleteProduct(prodId)
        return "Success"
    }
}