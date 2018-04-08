import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { EnumModule } from '../Enum/enum.module';
import { RequestModule } from '../Request/request.module';
import { CommonUtilsModule } from '../Common/Utils/util.module';

@Module({
    imports: [ EnumModule, RequestModule, CommonUtilsModule ],
    controllers: [ UserController ],
    components: [ UserService ],
})
export class UserModule {}