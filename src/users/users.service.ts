import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class UsersService {

    constructor(private readonly prisma:PrismaService){}

    GetNameUsers(){

        return this.prisma.users.findMany()
        
    }

   async CreateUsers(data: Prisma.UsersCreateInput){
    try{

       const user = await this.prisma.users.create({
       data:{ 

        createdAt: new Date(), 
        name: data.name, 
        email: data.email, 
        password: data.password 

       }

       })

       return user;
    }catch(error){
        console.error(`Erro ao criar usuário ${error.mensagem} `);
    }

       
    }
}
