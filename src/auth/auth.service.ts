
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
const User = require('./models/user')

@Injectable()
export class AuthService {
    constructor(private jwtService: JwtService) {}

    async validateUser(id: number): Promise<any> {
        const user = await User.findById(id);
        if (user) {
            return user;
        }
        return null;
    }

    createToken(payload: any) {
        return this.jwtService.sign(payload);
    }
}