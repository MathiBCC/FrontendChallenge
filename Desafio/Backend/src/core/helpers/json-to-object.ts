export class JsonToObject{

  static toConvert<T>(type: { new(): T}, obj){
    let object = new type();
    for(let prop in obj){
      object[prop] = obj[prop];
    }
    return object;
  }
}