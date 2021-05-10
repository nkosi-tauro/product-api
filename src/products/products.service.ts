import { Injectable, NotFoundException } from "@nestjs/common";
import {v4 as uuidv4} from 'uuid';
import {Product } from './products.model'
import { InjectModel } from '@nestjs/mongoose'
import {Model} from 'mongoose'

@Injectable()
export class ProductsService {
    private products: Product[] = [];
    
    constructor(@InjectModel('Product') private readonly productModel: Model<Product>,) {}

    async insertProduct(title:string, description:string, price:number){
        const newProduct = new this.productModel({
            title, 
            description,
            price,
        })
        const res = await newProduct.save();
        console.log(res)
        return res.id as string
        
    }

    async getProducts(){
        // return a copy of products array
        const products = await this.productModel.find().exec();
        return products.map((prod) => ({
            id:prod.id, 
            title:prod.title, 
            description:prod.description, 
            price:prod.price
        }))
    }

    getSingleProduct(productId:string){
        const product = this.findProduct(productId)[0]
        return {...product}
    }

    updateProduct(productId:string, title:string, description:string, price:number){
        const [product, index] = this.findProduct(productId)
        const updatedProduct = {...product}
        // check if new values have been passed to prevent overwrite
        if(title){
            updatedProduct.title = title;
        }
        if(description){
            updatedProduct.description = description;
        }
        if(price){
            updatedProduct.price = price;
        }
        // this.products[index] = updatedProduct
    }

    deleteProduct(productId:string){
        const [_, index] = this.findProduct(productId)
        this.products.splice(index,1)
    }

    
    private findProduct(id:string): [Product, number]{
        const productIndex = this.products.findIndex((prod)=> prod.id === id);
        const product = this.products[productIndex]
        if (!product){
            throw new NotFoundException("Could not find Product");
        }
        return [product, productIndex]
    }

    
}   

