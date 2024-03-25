import {RoleUser} from "../Enum/role-user";

export interface User {
  email : string;
  password : string;
  roleUser : RoleUser;
}
