import { Type } from 'class-transformer';
import { IsBoolean, IsNotEmpty, IsNumber, IsString, ValidateNested } from 'class-validator';

export class UserCreateDto{
    @IsNumber()
    @IsNotEmpty()
    cash1!: number;
    @IsNumber()
    @IsNotEmpty()
    cash2!: number;
    @IsNumber()
    @IsNotEmpty()
    cash3!: number;
}

export class UserBoughtDto{
    @IsNumber()
    id!:number;
    @IsString()
    address!:string
}

export class UserBoughtReponseDto{
    @IsBoolean()
    success!: boolean;
    @ValidateNested()
    @Type(() => BoughtDataDto)
    data!: BoughtDataDto[];
}

class BoughtDataDto{
    @ValidateNested()
    @Type(() => ResDto)
    resources!: ResDto[];
}

class ResDto{
    @IsNumber()
    cash1!: number;
    @IsNumber()
    cash2!: number;
    @IsNumber()
    cash3!: number;
}
