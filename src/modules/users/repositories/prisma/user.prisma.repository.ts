import { IUserRepository } from '../user.repository';
import { Injectable } from '@nestjs/common';
import { CreateUserDTO, UserCreatedDTO } from '../../dto/create-user.dto';
import { PrismaService } from 'src/database/PrismaService';

@Injectable()
export class UserPrismaRepository implements IUserRepository {
  constructor(private prisma: PrismaService) {}
  async save(data: CreateUserDTO): Promise<UserCreatedDTO> {
    return await this.prisma.user.create({
      data,
    });
  }
}
