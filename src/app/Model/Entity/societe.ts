import {RoleUser} from "../Enum/role-user";

export interface Societe {
  id:number;
  nom:string;
  image:string;
  email:string;
  password:string;
  roleUser:RoleUser;
  isVerifie:boolean;
}
