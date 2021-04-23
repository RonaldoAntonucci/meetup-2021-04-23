import { BcryptAdapter, GCPMailAdapter, LuxonAdapter, MomentAdapter , AWSMailAdapter} from "../adapters";
import { ICreateUserService } from "../contracts";
import { PgUsersRepository } from "../repositories/PgUsersRepository";
import { CreateUserService } from "./CreateUserService";
import { UsersController } from "./UsersController";

export const createUserServiceFactory  = (): ICreateUserService =>{
  const dateProvider = new LuxonAdapter()
  const usersRepository = new PgUsersRepository()
  const hashPassword = new BcryptAdapter()
  const mailProvider = new AWSMailAdapter()
  return new CreateUserService(dateProvider, usersRepository, hashPassword,usersRepository,mailProvider)
}

export const usersControllerFactory = (): UsersController =>{
  const createUserService = createUserServiceFactory()
  return new UsersController(createUserService)
}

export const createUserServiceMomentFactory  = (): ICreateUserService =>{
  const dateProvider = new MomentAdapter()
  const usersRepository = new PgUsersRepository()
  const hashPassword = new BcryptAdapter()
  const mailProvider = new AWSMailAdapter()
  return new CreateUserService(dateProvider, usersRepository, hashPassword,usersRepository,mailProvider)
}

export const createUserServiceGCPFactory = (): ICreateUserService =>{
  const dateProvider = new MomentAdapter()
  const usersRepository = new PgUsersRepository()
  const hashPassword = new BcryptAdapter()
  const mailProvider = new GCPMailAdapter()
  return new CreateUserService(dateProvider, usersRepository, hashPassword,usersRepository,mailProvider)
}

interface CreateUserServiceStrategyParams {
  mailProvider: 'GCP' | 'AWS'
  dateProvider: 'Luxon' | 'Moment'
}

export const createUserServiceFactory2 = (params: CreateUserServiceStrategyParams): ICreateUserService =>{
  const dateProvider = params.dateProvider === 'Moment' ? new MomentAdapter() : new LuxonAdapter()
  const usersRepository = new PgUsersRepository()
  const hashPassword = new BcryptAdapter()
  const mailProvider = params.mailProvider === 'GCP' ?  new GCPMailAdapter() : new AWSMailAdapter()
  return new CreateUserService(dateProvider, usersRepository, hashPassword,usersRepository,mailProvider)
}