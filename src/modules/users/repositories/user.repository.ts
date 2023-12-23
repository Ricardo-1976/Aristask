import { CreateUserDTO, UserCreatedDTO } from "../dto/create-user.dto";

export abstract class IUserRepository {
  abstract save(data: CreateUserDTO): Promise<UserCreatedDTO>;
}
