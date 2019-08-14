import { user as User} from './../entities/user.entity';
import { Controller, Get, Param } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(private userService: UserService) { }
    
    @Get('/:id')
    async getUserById(@Param('id') id: number | string):Promise<User> {
        return this.userService.getUserById(id);
    }
}
