import { IMailProvider } from "../contracts";

export class AWSMailAdapter implements IMailProvider{
  send():void{
    console.log('AWS send Mail.')
  }
}