export interface IServiceBase<T, TCreateDto, TUpdateDto, TSelect> {
  bCreate(createDto: TCreateDto): Promise<T>;
  bUpdate(id: number, updateDto: TUpdateDto): Promise<T>;
  bFindOneById(id: number, select?: TSelect): Promise<T>;
  bFindAll(select?: TSelect): Promise<T[]>;
  bDelete(id: number): Promise<T>;
}
