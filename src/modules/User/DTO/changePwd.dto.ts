import { IsString } from 'class-validator';

export class ChangePwdDTO {
    @IsString()
    readonly userId: string;

    @IsString()
    readonly newPassword: string;

    @IsString()
    readonly oldPassword: string;
}