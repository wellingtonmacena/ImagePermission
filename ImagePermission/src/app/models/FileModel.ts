export class FileModel {
  public size:string;
  constructor(public name: string,  sizeLong: number) {
    this.size = (sizeLong /1000).toString();
  }
}
