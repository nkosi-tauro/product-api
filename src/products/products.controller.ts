import { Controller, Post} from "@nestjs/common";

// /products
@Controller('products')
export class ProductsController {
    @Post()
    addProducts(): any {
        
    }
}