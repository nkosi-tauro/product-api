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
        const product = this.products.find((prod)=> prod.id === productId);
        if (!product){
            throw new NotFoundException("Could not find Product");
        }
        return {...product}
    }
}