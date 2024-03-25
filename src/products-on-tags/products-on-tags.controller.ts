import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProductsOnTagsService } from './products-on-tags.service';
import { CreateProductsOnTagDto } from './dto/create-products-on-tag.dto';
import { UpdateProductsOnTagDto } from './dto/update-products-on-tag.dto';

@Controller('products-on-tags')
export class ProductsOnTagsController {
  constructor(private readonly productsOnTagsService: ProductsOnTagsService) {}

  @Post()
  create(@Body() createProductsOnTagDto: CreateProductsOnTagDto) {
    return this.productsOnTagsService.bCreate(createProductsOnTagDto);
  }

  @Get()
  findAll() {
    return this.productsOnTagsService.bFindAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productsOnTagsService.bFindOneById(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProductsOnTagDto: UpdateProductsOnTagDto) {
    return this.productsOnTagsService.bUpdate(+id, updateProductsOnTagDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productsOnTagsService.delete();
  }
}
