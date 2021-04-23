import {IDateProvider} from '../contracts'

export class MomentAdapter implements IDateProvider{
  isBefore(date1: number, date2: number): boolean{
    console.log('Moment Adapter is Before.')
    return date1 < date2
  }
}