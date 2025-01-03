import { Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';  // Importa o PrismaService

@Module({
  providers: [PrismaService],  
  exports: [PrismaService],
})
export class PrismaModule {}