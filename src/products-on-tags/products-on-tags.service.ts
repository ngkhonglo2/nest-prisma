import { Injectable } from '@nestjs/common';
import { CommonService } from 'src/core/service.base.abstract';
import { Prisma, ProductsOnTags } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';
import { MODEL_NAME } from 'src/constant/modelName.constant';

@Injectable()
export class ProductsOnTagsService extends CommonService<
  ProductsOnTags,
  Prisma.ProductsOnTagsCreateInput,
  Prisma.ProductsOnTagsUpdateInput,
  any
> {
  constructor(private readonly databaseService: DatabaseService) {
    super(databaseService, MODEL_NAME.PRODUCTS_ON_TAGS)
  }
  async delete () {
    return 
  }
}
