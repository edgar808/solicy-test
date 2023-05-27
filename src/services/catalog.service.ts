import { Service } from 'typedi';
import { InjectRepository } from 'typeorm-typedi-extensions';
import { CatalogCreateDto } from '../dto/CatalogDto';
import { CatalogRepository } from '../repositories/ctalog.repository';
import { CatalogResource } from '../resources/catalog.resources';

@Service()
export class CatalogService {

    constructor(
        @InjectRepository()
        private readonly catalogRepository: CatalogRepository
    ) {}

    async create(data: CatalogCreateDto) {
        await this.catalogRepository.save(data)
    }

    async getOne(id: number) {
        const catalog = await this.catalogRepository.findOneOrFail(id);
        return CatalogResource.infoOne(catalog);
    }

    async delete(id: number) {
        await this.catalogRepository.softDelete(id)
    }
}
