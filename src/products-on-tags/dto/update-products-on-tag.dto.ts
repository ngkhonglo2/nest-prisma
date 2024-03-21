import { PartialType } from '@nestjs/mapped-types';
import { CreateProductsOnTagDto } from './create-products-on-tag.dto';

export class UpdateProductsOnTagDto extends PartialType(CreateProductsOnTagDto) {}
