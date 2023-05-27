import { Service } from 'typedi';
import { Transactional } from 'typeorm-transactional-cls-hooked';
import { InjectRepository } from 'typeorm-typedi-extensions';
import { UserBoughtDto, UserCreateDto } from '../dto/UserDto';
import { AssetEntity } from '../entities/asset/asset.entity';
import { CatalogEntity } from '../entities/catalog/catalog.entity';
import { UserEntity } from '../entities/user/user.entity';
import { ErrorCode } from '../modules/exception/ErrorCode';
import { ErrorMessages } from '../modules/exception/ErrorMessages';
import { Exception } from '../modules/exception/Exception';
import { AssetRepository } from '../repositories/asset.repository';
import { CatalogRepository } from '../repositories/ctalog.repository';
import { ProductRepository } from '../repositories/prouct.repository';
import { UserRepository } from '../repositories/user.repository';

@Service()
export class UserService {

    constructor(
        @InjectRepository()
        private readonly userRepository: UserRepository,
        @InjectRepository()
        private readonly catalogRepository: CatalogRepository,
        @InjectRepository()
        private readonly assetRepository: AssetRepository,
        @InjectRepository()
        private readonly productRepository: ProductRepository
    ) {}

    async create(data: UserCreateDto) {
        await this.userRepository.save(data)
    }

    @Transactional()
    async buyProduct(data: UserBoughtDto) {
        const user = await this.userRepository.findOneOrFail({
            where:{
                address:data.address
            }
        })

        const catalog = await this.catalogRepository.findOneOrFail(data.id);

        await this.checkWallet(user, catalog);

        const asset = await this.assetRepository.findOne({
            where:{
                address:data.address
            }
        });

        if(asset)await this.checkLevel(asset, catalog);

        await this.assetRepository.save({
            address:data.address,
            type:catalog.category,
            level:catalog.req3
        })
        
        await this.productRepository.save({
            address:data.address
        })

        return {

                resources: {
                    cash1:user.cash1,
                    cash2:user.cash2,
                    cash3:user.cash3
                }
            }
    }

    async checkWallet(user:UserEntity, catalog:CatalogEntity){
        if(user.cash1<catalog.cost1)
            throw new Exception(ErrorCode.BadRequestError, { error: ErrorMessages.NotEnoughtMonyInCost1 });
        if(user.cash2<catalog.cost2)
            throw new Exception(ErrorCode.BadRequestError, { error: ErrorMessages.NotEnoughtMonyInCost2 });
        if(user.cash2<catalog.cost2)
            throw new Exception(ErrorCode.BadRequestError, { error: ErrorMessages.NotEnoughtMonyInCost3 });
    } 

    async checkLevel(asset:AssetEntity, catalog:CatalogEntity){
        if(asset.level<catalog.req1)
            throw new Exception(ErrorCode.BadRequestError, { error: ErrorMessages.LevelProblem });
        if(asset.level<catalog.req2)
            throw new Exception(ErrorCode.BadRequestError, { error: ErrorMessages.LevelProblem });
        if(asset.level<catalog.req3)
            throw new Exception(ErrorCode.BadRequestError, { error: ErrorMessages.LevelProblem });
    } 
}
