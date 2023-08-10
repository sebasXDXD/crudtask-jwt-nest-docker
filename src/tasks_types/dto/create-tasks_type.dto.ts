import { IsString, MinLength } from "class-validator";

export class CreateTasksTypeDto {

    @IsString()
    @MinLength(1)
    type:string;

}
