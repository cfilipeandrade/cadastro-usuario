import { BaseEntity } from "./base-entity.model";

export interface User extends BaseEntity<string>{
  id: string;
  name: string;
  cpf: string;
  email: string;
  phone: string;
}
