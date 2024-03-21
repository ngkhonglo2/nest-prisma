import { Test, TestingModule } from '@nestjs/testing';
import { ProductsOnTagsController } from './products-on-tags.controller';
import { ProductsOnTagsService } from './products-on-tags.service';

describe('ProductsOnTagsController', () => {
  let controller: ProductsOnTagsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProductsOnTagsController],
      providers: [ProductsOnTagsService],
    }).compile();

    controller = module.get<ProductsOnTagsController>(ProductsOnTagsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
