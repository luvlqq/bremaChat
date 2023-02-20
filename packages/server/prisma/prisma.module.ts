import { Global, Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Global() // что бы не импортировать в каждый модуль ебанул его глобальным
@Module({
  providers: [PrismaService],
  exports: [PrismaService],
})
export class PrismaModule {}
