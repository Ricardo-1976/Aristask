export type CreateUserDTO = {
  email: string;
  password: string; 
}

export type UserCreatedDTO = {
  id: string;
  createdAt: Date;
} & CreateUserDTO;
