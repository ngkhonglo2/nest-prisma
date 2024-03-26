import { Product, $Enums } from '@prisma/client';

export class ProductEntity implements Product {
  id: number;
  name: string;
  createdAt: Date;
  updatedAt: Date;
  price: number;
  sale: boolean;
  availibility: $Enums.Availibility;
}
