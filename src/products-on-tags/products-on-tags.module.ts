import { Module } from '@nestjs/common';
import { ProductsOnTagsService } from './products-on-tags.service';
import { ProductsOnTagsController } from './products-on-tags.controller';

@Module({
  controllers: [ProductsOnTagsController],
  providers: [ProductsOnTagsService],
})
export class ProductsOnTagsModule {}
