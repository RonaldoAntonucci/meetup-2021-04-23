import { IMailProvider} from '../../src/contracts'

export class MailProviderSpy implements IMailProvider{
  public send(): void {
  }
}