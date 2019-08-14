import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { photo as Photo } from '../entities/photo.entity';
import { PhotoRepository } from './photo.repository';

@Injectable()
export class PhotoService {
    constructor(@InjectRepository(PhotoRepository) photoRepo:PhotoRepository) { }
}
