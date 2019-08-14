import { EntityRepository, Repository } from "typeorm";
import { user as User } from "src/entities/user.entity";
import { NotFoundException } from "@nestjs/common";

@EntityRepository(User)
export class UserRepository extends Repository<User>{
    async getUserById(id: number | string): Promise<User> {
        try {
            const user = await this.findOne(id);
            return user;
        } catch (e) {
            throw new NotFoundException('User not found');
        }
    }
}