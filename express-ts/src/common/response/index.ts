export class MyResponse<T> {
  message: string;
  data: T | any;
  constructor(data: T | any = null, message: string = `Success`) {
    this.message = message;
    this.data = data;
  }
}
