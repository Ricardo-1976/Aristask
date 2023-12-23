import { Body, Controller, Post } from "@nestjs/common";
import { CreateUserResponseSchemaDTO, CreateUserSchema, CreateUserSchemaDTO } from "./schemas/create-user.schema";
import { ApiBody, ApiResponse, ApiTags } from "@nestjs/swagger";
import { CreateUserUseCase } from "./useCases/create-user.usecase";
import { zodToOpenAPI } from "nestjs-zod";

const schemaUserSwagger = zodToOpenAPI(CreateUserSchema);

@Controller('/users')
@ApiTags('users')
export class UserController {
  constructor(
    private readonly createUserUseCase: CreateUserUseCase,
  ) {}

  @Post()
  @ApiBody({
    description: 'Criação de usuário',
    schema: schemaUserSwagger,
  })
  @ApiResponse({ status: 201, description: 'Usuário cadastrado com sucesso' })
  @ApiResponse({ status: 400, description: 'User already exists' })
  async create(@Body() {email, password}: CreateUserSchemaDTO) {
    const user = await this.createUserUseCase.execute({email, password});
    return CreateUserResponseSchemaDTO.parse(user);
  }
}
