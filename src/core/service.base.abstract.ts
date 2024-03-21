import { DatabaseService } from 'src/database/database.service';
import { IServiceBase } from './service.base.interface';

export abstract class CommonService<T, TCreateDto, TUpdateDto, TSelect>
  implements IServiceBase<T, TCreateDto, TUpdateDto, TSelect>
{
  protected modelName: string;
  private readonly prisma: DatabaseService;

  constructor(prisma: DatabaseService, modelName: string) {
    this.prisma = prisma;
    this.modelName = modelName;
  }

  async bCreate(createDto: TCreateDto): Promise<T> {
    const res = this.prisma[this.modelName].create({ data: createDto });
    return res;
  }

  async bUpdate(id: number, updateDto: TUpdateDto): Promise<T> {
    const res = this.prisma[this.modelName].update({
      where: {
        id,
      },
      data: updateDto,
    });
    return res;
  }

  async bFindAll(select?: TSelect): Promise<T[]> {
    const res = this.prisma[this.modelName].findMany(select);
    return res;
  }

  async bFindOneById(id: number, select?: TSelect): Promise<T> {
    const res = this.prisma[this.modelName].findUnique({
      where: {
        id,
      },
      ...select,
    });
    return res;
  }

  async bDelete(id: number): Promise<T> {
    const res = this.prisma[this.modelName].delete({
      where: {
        id,
      },
    });
    return res;
  }
}
