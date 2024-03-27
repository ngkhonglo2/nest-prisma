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

  async create(createProductDto: CreateProductDto) {
    const createProduct = _.omit(createProductDto, 'tagsId', 'userId');
    const res = await this.databaseService.product.create({
      data: createProduct,
    });

    if (createProductDto.tagsId) {
      const userAssignedBy = await this.databaseService.user.findUnique({
        where: {
          id: createProductDto.userId,
        },
      });

      const existingTags = await this.databaseService.tag.findMany({
        where: {
          id: {
            in: createProductDto.tagsId,
          },
        },
      });

      await this.databaseService.productsOnTags.createMany({
        data: existingTags.map((tag) => ({
          productId: res.id,
          tagId: tag.id,
          assignedBy: userAssignedBy.name,
        })),
      });
    }
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

  async update(id: number, updateProductDto: UpdateProductDto) {
    const updateProduct = _.omit(updateProductDto, 'tagsId', 'userId');

    if (updateProductDto.tagsId) {
      const existingTags = await this.databaseService.tag.findMany({
        where: {
          id: {
            in: updateProductDto?.tagsId,
          },
        },
      });

      const userAssignedBy = await this.databaseService.user.findUnique({
        where: {
          id: updateProductDto.userId,
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
          assignedBy: userAssignedBy.name,
        })),
      });
    }

    const res = this.databaseService.product.update({
      where: {
        id: id,
      },
      data: updateProduct,
    });
    return res;
  }

  async delete(id: number) {
    await this.databaseService.productsOnTags.deleteMany({
      where: {
        productId: id,
      },
    });

    await this.databaseService.description.deleteMany({
      where: {
        productId: id,
      },
    });

    await this.databaseService.reviews.deleteMany({
      where: {
        productId: id,
      },
    });

    const res = await this.databaseService.product.delete({
      where: {
        id: id,
      },
    });

    return res;
  }
}
