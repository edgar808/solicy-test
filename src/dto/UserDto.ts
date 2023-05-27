import { IsNotEmpty, IsNumber } from 'class-validator';

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
