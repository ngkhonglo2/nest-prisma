import { Injectable } from '@nestjs/common';
import { CreateProductsOnTagDto } from './dto/create-products-on-tag.dto';
import { UpdateProductsOnTagDto } from './dto/update-products-on-tag.dto';

@Injectable()
export class ProductsOnTagsService {
  create(createProductsOnTagDto: CreateProductsOnTagDto) {
    return 'This action adds a new productsOnTag';
  }

  findAll() {
    return `This action returns all productsOnTags`;
  }

  findOne(id: number) {
    return `This action returns a #${id} productsOnTag`;
  }

  update(id: number, updateProductsOnTagDto: UpdateProductsOnTagDto) {
    return `This action updates a #${id} productsOnTag`;
  }

  remove(id: number) {
    return `This action removes a #${id} productsOnTag`;
  }
}
