import {Injectable, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {GlobalAppService} from "../Global/global-app.service";
import {Batterie} from "../../Model/Entity/batterie";
import {AchatStatus} from "../../Model/Enum/achat-status";

@Injectable({
  providedIn: 'root'
})
export class BatterieService {

  constructor(private http:HttpClient, private globalAppService:GlobalAppService) { }

  private apiUrl = this.globalAppService.getApiUrl()+"Batterie/";

  readBatteries(){
      return this.http.get(this.apiUrl+"ReadBatteries");
  }
  readBatteriesByAchatStatus(achatStatus:AchatStatus){
    return this.http.get(this.apiUrl+"ReadBatteries/"+achatStatus);
  }
  readBatteriesByIdAgent(idAgent:number){
    return this.http.get(this.apiUrl+"ReadBattery/"+idAgent);
  }
  getBatteriesAchetes(idSociete:number){
    return this.http.get(this.apiUrl+"getBatteriesAchetes/"+idSociete);
  }

  updateBatterie(batterie:Batterie){
    return this.http.put(this.apiUrl+"UpdateBattery",batterie);
  }

  deleteBatterie(id: number) {
    return this.http.delete(this.apiUrl+"DeleteBattery/"+id);
  }

  saveBatterie(batterie: Batterie) {
    return this.http.post(this.apiUrl+"CreateBattery",batterie);
  }

  achatBattery(achatStatus: any) {
    return this.http.post(this.apiUrl+"AcheterBatterie",achatStatus);
  }

  readBatteriesByNomAndPrix(choice: string, search: string) {
    return this.http.get(this.apiUrl+"cherecherBatteries/"+choice+"/"+search);
  }
}
