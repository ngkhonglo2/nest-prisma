import { Prisma } from '@prisma/client';
import { IsNotEmpty } from 'class-validator';

export class CreateProductsOnTagDto
  implements Prisma.ProductsOnTagsCreateInput
{
  @IsNotEmpty()
  assignedBy: string;

  @IsNotEmpty()
  productId: string;

  @IsNotEmpty()
  tagId: string;

  Product: Prisma.ProductCreateNestedOneWithoutTagsInput;

  tag: Prisma.TagCreateNestedOneWithoutProductInput;

  assignedAt?: string | Date;
}
