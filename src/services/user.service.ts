import { Service } from 'typedi';
import { InjectRepository } from 'typeorm-typedi-extensions';
import { UserCreateDto } from '../dto/UserDto';
import { UserRepository } from '../repositories/user.repository';

@Service()
export class UserService {

    constructor(
        @InjectRepository()
        private readonly userRepository: UserRepository
    ) {}

    async create(data: UserCreateDto) {
        await this.userRepository.save(data)
    }

}
