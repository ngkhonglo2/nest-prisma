import { ProductsOnTags } from '@prisma/client';

export class ProductsOnTagEntity implements ProductsOnTags {
  productId: number;
  tagId: number;
  assignedAt: Date;
  assignedBy: string;
}
