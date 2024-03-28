import {AchatStatus} from "../Enum/achat-status";
import {Batterie} from "./batterie";
import {Societe} from "./societe";

export interface Voiture {
  id : number;
  matrecule : string;
  prix : number;
  image : string;
  achatStatus : AchatStatus;
  batterie : {
    prix: number;
    id:number;
    nom:string;
    vis: string;
  }
  societe : {
    id:number;
  }
}
