import { Injectable } from '@nestjs/common';
import { CommonService } from 'src/core/service.base.abstract';
import { Prisma, User } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';
import { MODEL_NAME } from 'src/constant/modelName.constant';

@Injectable()
export class UserService extends CommonService<
  User,
  Prisma.UserCreateInput,
  Prisma.UserUpdateInput,
  any
> {
  constructor(private readonly dataBaseService: DatabaseService) {
    super(dataBaseService, MODEL_NAME.USER);
  }
}
