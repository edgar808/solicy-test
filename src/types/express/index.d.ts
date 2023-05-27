import { UserEntity } from '../../entities/user/user.entity';

declare global{
    namespace Express {
        interface Request {
            user: UserEntity;
        }
    }
}
