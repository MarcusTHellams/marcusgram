import { PhotoRepository } from './photo.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { PhotoService } from './photo.service';
import { PhotoController } from './photo.controller';

@Module({
  imports: [TypeOrmModule.forFeature([PhotoRepository])],
  providers: [PhotoService],
  controllers: [PhotoController],
})
export class PhotoModule {}
