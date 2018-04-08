import { IsString } from 'class-validator';

export class LoginDTO {
    @IsString()
    readonly userId: string;

    @IsString()
    readonly password: string;
}