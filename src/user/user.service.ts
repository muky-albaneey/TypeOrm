/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/entities/user.entity';
import { Repository } from 'typeorm';


 interface datas {

    name: string;
    email: string;
    password: string;

    }
    interface dataUpdate {

        name?: string;
        email?: string;
        password?: string;
    
        }

@Injectable()
export class UserService {
    
   

    constructor(@InjectRepository(User) private readonly userRepor: Repository<User>){}

    async findOneFunc(id: number){
        return await this.userRepor.findOne({
            where: {
                id: id
            }
        });
    }

    async createUser(users : datas){
        
        const user = await this.userRepor.create(users);

        return await this.userRepor.save(user);
    
    }

    async updateUser(id: number, update:dataUpdate){
        
        return await this.userRepor.update(id, update)
    }
}