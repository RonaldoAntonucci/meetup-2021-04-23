import {IDateProvider} from '../../src/contracts'

export class DateProviderSpy implements IDateProvider{
  public params : [number, number]
  public result : boolean = true
  isBefore(...params : [number, number]): boolean{
    this.params = params
    return this.result
  }
}