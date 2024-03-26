import { Injectable } from '@nestjs/common';
import { Product } from '@prisma/client';
import { MODEL_NAME } from 'src/constant/modelName.constant';
import { CommonService } from 'src/core/service.base.abstract';
import { DatabaseService } from 'src/database/database.service';
import { queryParse } from 'src/helpers/utils';
import { UpdateProductDto } from './dto/update-product.dto';
import { CreateProductDto } from './dto/create-product.dto';
const _ = require('lodash');

@Injectable()
export class ProductsService extends CommonService<
  Product,
  CreateProductDto,
  UpdateProductDto,
  any
> {
  constructor(private readonly databaseService: DatabaseService) {
    super(databaseService, MODEL_NAME.PRODUCT);
  }

  async update(id: number, updateProductDto: UpdateProductDto) {
    const updateProduct = _.omit(updateProductDto, 'tagsId');

    if (updateProductDto?.tagsId.length > 0) {
      const existingTags = await this.databaseService.tag.findMany({
        where: {
          id: {
            in: updateProductDto?.tagsId,
          },
        },
      });

      await this.databaseService.productsOnTags.deleteMany({
        where: {
          productId: id,
        },
      });

      // xóa các object trong tags
      await this.databaseService.product.update({
        where: {
          id: id,
        },
        data: {
          tags: {
            set: [],
          },
        },
      });

      // Thêm tags mới vào product vào model trung gian
      await this.databaseService.productsOnTags.createMany({
        data: existingTags.map((tag) => ({
          productId: id,
          tagId: tag.id,
          assignedBy: 'admin',
        })),
      });

      const res = this.databaseService.product.update({
        where: {
          id: id,
        },
        data: updateProduct,
      });
      return res;
    }

    const res = this.databaseService.product.update({
      where: {
        id: id,
      },
      data: updateProduct,
    });
    return res;
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
