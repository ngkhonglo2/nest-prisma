import { $Enums, Prisma } from '@prisma/client';
import { IsNotEmpty } from 'class-validator';

export class CreateProductDto implements Prisma.ProductCreateInput {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  price: number;

  createdAt?: string | Date;

  updatedAt?: string | Date;

  sale?: boolean;

  @IsNotEmpty()
  availibility: $Enums.Availibility;

  description?: Prisma.DescriptionCreateNestedOneWithoutProductInput;

  Reviews?: Prisma.ReviewsCreateNestedManyWithoutProductInput;

  tags?: Prisma.ProductsOnTagsCreateNestedManyWithoutProductInput;

  tagsId?: number[];

  userId: number;
}
