import { Injectable } from "@nestjs/common";
import {v4 as uuidv4} from 'uuid';
import {Product } from './products.model'

@Injectable()
export class ProductsService {
    products: Product[] = [];

    insertProduct(title:string, description:string, price:number){
        const prodId = uuidv4()
        const newProduct = new Product(prodId, title, description, price)
        this.products.push(newProduct)
        return prodId
    }
}