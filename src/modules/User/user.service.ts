import { Component, Dependencies } from '@nestjs/common';
import { HttpException } from '@nestjs/core';
import { Observable } from 'rxjs/Observable';

@Component()
@Dependencies('EnumRequestUrl', 'Request', 'Utils')
export class UserService {

    constructor(private url, private request, private utils) { }

    static generateSerial() {
        const SERIAL_NUMBER = 'I00002';
        const Rand = Math.random();
        const numb = 10000 + Math.round(Rand * 100000);
        const str = SERIAL_NUMBER + new Date().toLocaleDateString().replace(/-/g, '').replace(/\//g, '') + numb;
        return str;
    }

    async login(params) {
        const { security } = this.utils;
        const { userId, password } = params;
        const reqBody = {
            source: 'wpt',
            userId,
            password: security.md5(security.decode(password)).toUpperCase(),
        };
        let ret = await this.request.post({
            url: this.url.LOGIN,
            headers: {
                'Serial-No': UserService.generateSerial(),
                'Content-Type': 'application/json;charset=utf-8',
            },
            form: reqBody,
        });
        ret = JSON.parse(ret);

        // TODO: login exception
        if (ret.retCode !== '000000') throw new Error(ret);

        // generate token

        return {user: ret, token: ''};
    }

    async changePwd(params) {
        const { security } = this.utils;
        const { userId, oldPassword, newPassword } = params;
        const reqBody = {
            source: 'wpt',
            userId,
            oldPassword: security.md5(security.decode(oldPassword)).toUpperCase(),
            newPassword: security.md5(security.decode(newPassword)).toUpperCase(),
        };

        let ret = await this.request.post({
            url: this.url.MODIFY_PWD,
            headers: {
                'Serial-No': UserService.generateSerial(),
                'Content-Type': 'application/json;charset=utf-8',
            },
            form: reqBody,
        });
        ret = JSON.parse(ret);

        // TODO: login exception
        if (ret.retCode !== '000000') throw new Error(ret);

        return ret.data;
    }
}