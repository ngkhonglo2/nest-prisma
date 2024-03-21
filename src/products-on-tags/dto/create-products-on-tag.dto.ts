import { Prisma } from '@prisma/client';
import { IsNotEmpty } from 'class-validator';

export class CreateProductsOnTagDto
  implements Prisma.ProductsOnTagsCreateInput
{
  @IsNotEmpty()
  assignedBy: string;

  @IsNotEmpty()
  Product: Prisma.ProductCreateNestedOneWithoutTagsInput;

  @IsNotEmpty()
  tag: Prisma.TagCreateNestedOneWithoutProductInput;

  assignedAt?: string | Date;
}
