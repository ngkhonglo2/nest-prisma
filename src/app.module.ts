import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { ProductsModule } from './products/products.module';
import { ReviewsModule } from './reviews/reviews.module';
import { TagsModule } from './tags/tags.module';
import { ProductsOnTagsModule } from './products-on-tags/products-on-tags.module';

@Module({
  imports: [DatabaseModule, ProductsModule, ReviewsModule, TagsModule, ProductsOnTagsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
