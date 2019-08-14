import { EntityRepository, Repository } from "typeorm";
import { user as User } from "src/entities/user.entity";

@EntityRepository(User)
export class UserRepository extends Repository<User>{
    
}