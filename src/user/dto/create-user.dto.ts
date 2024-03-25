import { Prisma } from '@prisma/client';
import { IsNotEmpty } from 'class-validator';

export class CreateUserDto implements Prisma.UserCreateInput {
  @IsNotEmpty()
  name: string;

  age?: number;

  email?: string;

  avatar?: string;
}
