export class Datetime {
  static convertToInputDateTime(obj: Date) {
    return obj.toString().substring(0,16);
    
  }
}