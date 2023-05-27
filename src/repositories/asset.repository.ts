import { EntityRepository } from 'typeorm';
import { Service } from 'typedi';
import { Repository } from './BaseRepository';
import { AssetEntity } from '../entities/asset/asset.entity';

@Service()
@EntityRepository(AssetEntity)
export class AssetRepository extends Repository<AssetEntity> {}
