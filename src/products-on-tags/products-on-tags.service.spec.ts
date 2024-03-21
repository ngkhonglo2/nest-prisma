import { Test, TestingModule } from '@nestjs/testing';
import { ProductsOnTagsService } from './products-on-tags.service';

describe('ProductsOnTagsService', () => {
  let service: ProductsOnTagsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProductsOnTagsService],
    }).compile();

    service = module.get<ProductsOnTagsService>(ProductsOnTagsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
