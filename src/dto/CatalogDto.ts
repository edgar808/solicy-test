import { Type } from 'class-transformer';
import { IsNotEmpty, IsNumber, IsString, Max, Min, ValidateNested } from 'class-validator';

export class CatalogCreateDto{
    @IsNotEmpty()
    @IsString()
    name!: string;
    @IsNotEmpty()
    @IsString()
    description!: string;
    @IsNotEmpty()
    @IsString()
    url!: string;
    @IsNumber()
    cost1!: number;
    @IsNumber()
    @IsNotEmpty()
    cost2!: number;
    @IsNumber()
    @IsNotEmpty()
    cost3!: number;
    @IsNumber()
    @Min(0)
    @Max(10)
    @IsNotEmpty()
    req1!: number;
    @IsNumber()
    @Min(0)
    @Max(10)
    @IsNotEmpty()
    req2!: number;
    @IsNumber()
    @Min(0)
    @Max(10)
    @IsNotEmpty()
    req3!: number;
    @IsNumber()
    @IsNotEmpty()
    @Min(0)
    @Max(3)
    category!: number
}

export class CatalogGetDto{
    @IsNotEmpty()
    @IsString()
    id!: string;
    @IsNotEmpty()
    @IsString()
    name!: string;
    @IsNotEmpty()
    @IsString()
    description!: string;
    @IsNotEmpty()
    @IsString()
    imageUrl!: string;
    @ValidateNested()
    @Type(() => PriceDto)
    price!: PriceDto[];
    @ValidateNested()
    @Type(() => RecDto)
    req!: RecDto[];
}

class PriceDto{
    @IsNumber()
    cost1!: number;
    @IsNumber()
    cost2!: number;
    @IsNumber()
    cost3!: number;
}

class RecDto{
    @IsNumber()
    cost1!: number;
    @IsNumber()
    cost2!: number;
    @IsNumber()
    cost3!: number;
}
