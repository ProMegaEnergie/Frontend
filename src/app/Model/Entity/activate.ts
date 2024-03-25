import {RoleUser} from "../Enum/role-user";

export interface Activate {
    code: number;
    email: string;
    roleUser: RoleUser;
}
