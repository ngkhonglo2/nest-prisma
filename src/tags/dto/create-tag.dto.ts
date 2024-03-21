import { Prisma } from '@prisma/client';
import { IsNotEmpty } from 'class-validator';

export class CreateTagDto implements Prisma.TagCreateInput {
  @IsNotEmpty()
  content: string;

  product?: Prisma.ProductsOnTagsCreateNestedManyWithoutTagInput;

  createdAt?: string | Date;

  updatedAt?: string | Date;
}
