import { Injectable } from '@nestjs/common';
import { CommonService } from 'src/core/service.base.abstract';
import { Prisma, Tag } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';
import { MODEL_NAME } from 'src/constant/modelName.constant';

@Injectable()
export class TagsService extends CommonService<
  Tag,
  Prisma.TagCreateInput,
  Prisma.TagUpdateInput,
  any
> {
  constructor(private readonly databaseService: DatabaseService) {
    super(databaseService, MODEL_NAME.TAG);
  }
}
