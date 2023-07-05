import { Global, Module } from '@nestjs/common';
import { PrismaService } from '../database/prisma.service';
import { UsersRepository } from 'src/shared/database/repositories/users.repository';

@Global()
@Module({
  providers: [PrismaService, UsersRepository],
  exports: [UsersRepository],
})
export class DatabaseModule {}
