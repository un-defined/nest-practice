import { Component } from '@nestjs/common';
import { HttpException } from '@nestjs/core';
import { Observable } from 'rxjs/Observable';

@Component()
export class UserService {

    private users = [
        { _id: 1, _name: 'Andy', _age: 18 },
        { _id: 2, _name: 'Angela', _age: 18 }
    ];

    getAllUsers() {
        return Promise.resolve(this.users);
    }

    getUser(id: number) {
        const user = this.users.find(user => user._id === id);
        if (!user) {
            throw new HttpException('user not fount', 404);
        }
        return Promise.resolve(user);
    }

    async login(params) {
        const { userId, password } = params;
    }
}