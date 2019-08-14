import { EntityRepository, Repository } from "typeorm";
import { photo as Photo } from "../entities/photo.entity";

@EntityRepository(Photo)
export class PhotoRepository extends Repository<Photo>{
    
}