import {
    JsonController,
    Post,
    Body,
    HttpCode
} from 'routing-controllers';
import { Service } from 'typedi';
import { UserCreateDto } from '../dto/UserDto';
import { HttpStatus } from '../modules/exception/HttpStatus';
import { UserService } from '../services/user.service';

@Service()
@JsonController('/user')
export class UserController {

    constructor(private userService: UserService) {}

    @Post('/')
    @HttpCode(HttpStatus.NO_CONTENT)
    async create(@Body() data: UserCreateDto) {
        await this.userService.create(data);
    }

}

