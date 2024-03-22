import {RoleUser} from "../Enum/role-user";

export interface Agent {
  id:number;
  nom:string;
  prenom:string;
  email:string;
  password:string;
  roleUser:RoleUser;
  isVerifie:boolean;
}
