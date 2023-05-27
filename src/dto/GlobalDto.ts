import { IsDefined, IsNumber, IsPositive } from 'class-validator';

export class ParamIdIntDto implements Readonly<ParamIdIntDto> {
    @IsDefined()
    @IsNumber()
    @IsPositive()
    id!: number;
}
