import { Injectable } from '@nestjs/common';
import { user as User } from '../entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { UserRepository } from './user.repository';

@Injectable()
export class UserService {
    constructor(@InjectRepository(UserRepository) userRepo: UserRepository){}
}
