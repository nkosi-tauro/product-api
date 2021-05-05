import { Injectable, NotFoundException } from "@nestjs/common";
import {v4 as uuidv4} from 'uuid';
import {Product } from './products.model'

@Injectable()
export class ProductsService {
    private products: Product[] = [];

    insertProduct(title:string, description:string, price:number){
        const prodId = uuidv4()
        const newProduct = new Product(prodId, title, description, price)
        this.products.push(newProduct)
        return prodId
    }

    getProducts(){
        // return a copy of products array
        return [...this.products]
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
        this.products[index] = updatedProduct
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

