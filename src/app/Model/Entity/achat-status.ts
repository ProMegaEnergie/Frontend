import {StatusBattery} from "../Enum/status-battery";
import {Batterie} from "./batterie";
import {Societe} from "./societe";

export interface AchatStatus {
  id: number;
  statusBattery: StatusBattery
  batterie: Batterie
  societe: Societe
}
