import {config} from 'dotenv'
import { DateProviderEnum, MailProviderEnum } from '../contracts'
config()
import {usersControllerFactory, createUserServiceMomentFactory, createUserServiceGCPFactory, createUserServiceFactory2} from './factories'
import { UsersController } from './UsersController'

const usersController = usersControllerFactory()
const usersControllerMoment = new UsersController(createUserServiceMomentFactory())
const usersControllerGCP = new UsersController(createUserServiceGCPFactory())

const usersController2 = new UsersController(createUserServiceFactory2({dateProvider: process.env.DATEPROVIDER as DateProviderEnum, mailProvider: process.env.MAIL as MailProviderEnum}))

//usersController.create({email:'mail@email.com'})

//usersControllerMoment.create({email:'mail@email.com'})

//usersControllerGCP.create({email:'mail@email.com'})

usersController2.create({email:'mail@email.com'})