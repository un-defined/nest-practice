import {
    Controller, Get, Post, Request, Response, Param, Next,
    HttpStatus, HttpException, UseFilters, UseGuards, Body, Dependencies,
} from '@nestjs/common';
import { LoginDTO } from './DTO/login.dto';
import { ChangePwdDTO } from './DTO/changePwd.dto';

@Controller('user')
@Dependencies('UserService')
export class UserController {

    constructor(private userService) {}

    @Post('login')
    async userLogin( @Body() body: LoginDTO, @Response() res ) {
        const ret = await this.userService.login(body);
        res.json({ret});
    }

    @Post('changePwd')
    async changePwd( @Body() body: ChangePwdDTO, @Response() res ) {
        const ret = await this.userService.changePwd(body);
        res.json({ret});
    }
}