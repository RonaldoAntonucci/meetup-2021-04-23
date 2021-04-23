import { IMailProvider } from "../contracts";

export class GCPMailAdapter implements IMailProvider{
  send():void{
    console.log('GCP send Mail.')
  }
}