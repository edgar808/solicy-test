import { EntityRepository } from 'typeorm';
import { Service } from 'typedi';
import { Repository } from './BaseRepository';
import { CatalogEntity } from '../entities/catalog/catalog.entity';

@Service()
@EntityRepository(CatalogEntity)
export class CatalogRepository extends Repository<CatalogEntity> {}
