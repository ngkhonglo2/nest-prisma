import { Tag } from '@prisma/client';

export class TagEntity implements Tag {
  id: number;
  content: string;
  updatedAt: Date;
  createdAt: Date;
}
