import { HttpException, HttpStatus, Injectable, Logger } from '@nestjs/common';
import { IUserRepository } from '../repositories/user.repository';
import { CreateUserDTO } from '../dto/create-user.dto';

@Injectable()
export class CreateUserUseCase {
  constructor(private userRepository: IUserRepository) {}

  async execute(data: CreateUserDTO) {
    return await this.userRepository.save({
      ...data,
    });
  }
}
