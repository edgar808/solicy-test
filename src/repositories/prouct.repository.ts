import { EntityRepository } from 'typeorm';
import { Service } from 'typedi';
import { Repository } from './BaseRepository';
import { ProductEntity } from '../entities/product/product.entity';

@Service()
@EntityRepository(ProductEntity)
export class ProductRepository extends Repository<ProductEntity> {}
