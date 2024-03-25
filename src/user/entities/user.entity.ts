import { User } from '@prisma/client';

export class UserEntity implements User {
  id: number;
  name: string;
  age: number;
  email: string;
  avatar: string;
}
