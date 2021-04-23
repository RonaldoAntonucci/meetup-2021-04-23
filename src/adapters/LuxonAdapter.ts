import {IDateProvider} from '../contracts'

export class LuxonAdapter implements IDateProvider{
  isBefore(date1: number, date2: number): boolean{
    console.log('Luxon Adapter is Before.')
    return date1 < date2
  }
}