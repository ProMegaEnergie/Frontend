import {AchatStatus} from "../Enum/achat-status";

export interface Batterie {
  id: number;
  nom: string;
  image: string;
  prix: number;
  vis: string;
  achatStatus: AchatStatus;
  agent : {
    id:number;
  }
}
