import {
    Controller, Get, Post, Request, Response, Param, Next,
    HttpStatus, HttpException, UseFilters, UseGuards, Body, Dependencies,
} from '@nestjs/common';

@Controller('user')
@Dependencies('UserService')
export class UserController {

    constructor(private userService) {}

    @Post('login')
    async userLogin( @Body() body, @Response() res ) {
        const ret = await this.userService.login(body);
        res.json({ret});
    }

    @Post('changePwd')
    async changePwd( @Body() body, @Response() res ) {
        const ret = await this.userService.changePwd(body);
        res.json({ret});
    }
}