export class Properties{
  /**model accepted by typeorm */
  static convertArrayNumberInArrayObj(obj: object, properties: string[]){
    for(let prop of properties){
      obj[prop] = obj[prop].map(x => {
        let auxAnyForConvert: any = {id: x}
        return auxAnyForConvert;
      })
    }
    
  }
  /**model accepted by angular form */
  static convertArrayObjInArrayNumber(obj: object, properties: string[]){
    for(let prop of properties){
      obj[prop] = obj[prop].map(x => x.id);
    }
  }

}