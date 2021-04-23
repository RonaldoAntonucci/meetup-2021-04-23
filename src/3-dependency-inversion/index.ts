import {usersControllerFactory} from './factories'

const usersController = usersControllerFactory()

usersController.create({email:'mail@email.com'})