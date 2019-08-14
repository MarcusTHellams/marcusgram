import { Injectable } from '@nestjs/common';
import { user as User } from '../entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { UserRepository } from './user.repository';

@Injectable()
export class UserService {
    constructor(@InjectRepository(UserRepository) private userRepo: UserRepository) { }
    
    async getUserById(id: number | string): Promise<User> {
        return await this.userRepo.getUserById(id);
    }
}
