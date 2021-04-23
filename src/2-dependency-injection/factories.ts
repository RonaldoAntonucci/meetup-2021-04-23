import { BcryptAdapter, LuxonAdapter } from "../adapters";
import { AWSMailAdapter } from "../adapters/GCPMailAdapter";
import { PgUsersRepository } from "../repositories/PgUsersRepository";
import { CreateUserService } from "./CreateUserService";
import { UsersController } from "./UsersController";

export const createUserServiceFactory  = (): CreateUserService =>{
  const dateProvider = new LuxonAdapter()
  const usersRepository = new PgUsersRepository()
  const hashPassword = new BcryptAdapter()
  const mailProvider = new AWSMailAdapter()
  return new CreateUserService(dateProvider, usersRepository, hashPassword,mailProvider)
}

export const usersControllerFactory = (): UsersController =>{
  const createUserService = createUserServiceFactory()
  return new UsersController(createUserService)
}