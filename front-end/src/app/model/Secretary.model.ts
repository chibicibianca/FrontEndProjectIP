export class Secretary {
  private id: number;
  private first_name: string;
  private last_name: string;
  private webmail: String;
  private password: String;


  constructor(object: any) {
    this.id = object.id;
    this.first_name = object.first_name;
    this.last_name = object.last_name;
    this.webmail = object.webmail;
    this.password = object.password;
  }

}
