import {Injectable, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {GlobalAppService} from "../Global/global-app.service";

@Injectable({
  providedIn: 'root'
})
export class BatterieService {

  constructor(private http:HttpClient, private globalAppService:GlobalAppService) { }

  private apiUrl = this.globalAppService.getApiUrl()+"Batterie/";

  readBatteries(){
      return this.http.get(this.apiUrl+"ReadBatteries");
  }
  readBatteriesByAchatStatus(AchatStatus:string){
    return this.http.get(this.apiUrl+"ReadBatteries/"+AchatStatus);
  }
  readBatteriesByIdAgent(idAgent:number){
    return this.http.get(this.apiUrl+"ReadBattery/"+idAgent);
  }
  readBatteryByIdAndIdAgent(idBattery:number, idAgent:number){
    return this.http.get(this.apiUrl+"ReadBattery/"+idBattery+"/"+idAgent);
  }
}
