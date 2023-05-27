import {
    Get,
    JsonController,
    Params,
    Post,
    Body,
    HttpCode,
    Delete
} from 'routing-controllers';
import { Service } from 'typedi';
import { HttpStatus } from '../modules/exception/HttpStatus';
import { ResponseSchema } from 'routing-controllers-openapi';
import { CatalogService } from '../services/catalog.service';
import { ParamIdIntDto } from '../dto/GlobalDto';
import { CatalogCreateDto, CatalogGetDto } from '../dto/CatalogDto';

@Service()
@JsonController('/catalog')
export class CatalogController {

    constructor(private catalogService: CatalogService) {}

    @Post('/')
    @HttpCode(HttpStatus.NO_CONTENT)
    async create(@Body() data: CatalogCreateDto) {
        await this.catalogService.create(data);
    }

    @Get('/:id')
    @HttpCode(HttpStatus.OK)
    @ResponseSchema(CatalogGetDto)
    async getOne(@Params() params: ParamIdIntDto) {
        return this.catalogService.getOne(params.id);
    }
    
    @Delete('/:id')
    @HttpCode(HttpStatus.NO_CONTENT)
    async delete(
        @Params() params: ParamIdIntDto
    ) {
        await this.catalogService.delete(params.id);
    }
}

