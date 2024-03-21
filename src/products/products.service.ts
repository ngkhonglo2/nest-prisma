import { Injectable } from '@nestjs/common';
import { Prisma, Product } from '@prisma/client';
import { MODEL_NAME } from 'src/constant/modelName.constant';
import { CommonService } from 'src/core/service.base.abstract';
import { DatabaseService } from 'src/database/database.service';
import { queryParse } from 'src/helpers/utils';

@Injectable()
export class ProductsService extends CommonService<
  Product,
  Prisma.ProductCreateInput,
  Prisma.ProductUpdateInput,
  any
> {
  constructor(private readonly databaseService: DatabaseService) {
    super(databaseService, MODEL_NAME.PRODUCT);
  }

  async findAll(query) {
    const newQuery = queryParse(query);

    return this.databaseService.product.findMany({
      skip: newQuery.skip,
      take: newQuery.take,
      where: {
        sale: newQuery.sale,
      },
      include: {
        Reviews: {
          select: {
            id: true,
          },
        },
      },
      orderBy: {
        createdAt: 'desc',
      },
    });
  }

  async findOne(id: number) {
    return this.databaseService.product.findUnique({
      where: {
        id,
      },
      include: {
        description: true,
        Reviews: { select: { id: true, title: true } },
        tags: true,
      },
    });
  }
}
