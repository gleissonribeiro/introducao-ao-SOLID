import { v4 as uuidV4 } from "uuid";

interface ICreateUser {
  name: string;
  email: string;
}

class User {
  // Complete aqui
  public id: string;
  public name: string;
  public admin: boolean;
  public email: string;
  public created_at: Date;
  public updated_at: Date;

  constructor({ name, email }: ICreateUser) {
    this.id = uuidV4();
    this.name = name;
    this.admin = false;
    this.email = email;
    this.created_at = new Date();
    this.updated_at = new Date();
  }

  public turnToAdmin(): User {
    this.admin = true;
    return this;
  }
}

export { User };
