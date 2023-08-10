import { IsNumber, IsOptional, IsPositive, IsString, MinLength } 
from "class-validator";

export class CreateTaskDto {
    @IsString()
    @MinLength(6)
    title: string;
    @IsString()
    @MinLength(10)
    description: string;
    @IsNumber()
    @IsPositive()
    @IsOptional()
    id_type: number;
}
