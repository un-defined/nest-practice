import { Controller, Get, Post, Request, Response, Param, Next, HttpStatus, HttpException, UseFilters, UseGuards, Body, Dependencies } from '@nestjs/common';

@Controller('user')
@Dependencies('UserService')
export class UserController {

    constructor(private userService) {}

    @Post('login')
    async userLogin( @Body() body, @Response() res ) {
        // WANGTTG MTIzNDU2
        console.log('Body', body);
        const ret = await this.userService.login(body);
        console.log('Ret', ret);
        res.json({ret});
    }
    
}