import { Injectable } from '@angular/core';
import {GlobalAppService} from "../Global/global-app.service";
import {HttpClient} from "@angular/common/http";
import {Voiture} from "../../Model/Entity/voiture";
import {AchatStatus} from "../../Model/Enum/achat-status";

@Injectable({
  providedIn: 'root'
})
export class VoitureService {

  constructor(private http:HttpClient,private globalAppService:GlobalAppService) { }

  private apiUrl = this.globalAppService.getApiUrl()+"Voiture/";

  readVoitureByIdSociete(idSociete: number){
    return this.http.get(this.apiUrl+"readVoitureByIdSociete/"+idSociete);
  }

  updateVoiture(voiture: Voiture) {
    return this.http.put(this.apiUrl + "updateVoiture", voiture);
  }

  deleteVoiture(id: number) {
    return this.http.delete(this.apiUrl + "deleteVoiture/" + id);
  }

  addVoiture(voiture: Voiture) {
    return this.http.post(this.apiUrl + "createVoiture", voiture);
  }

  achatVoiture(achatStatus: { voiture: { id: number }; client: { id: number } }) {
    return this.http.post(this.apiUrl + "acheterVoiture", achatStatus);
  }
  readVoituresByAchatStatus() {
    return this.http.get(this.apiUrl + "readVoitures/"+AchatStatus.NotPayed);
  }

  readVoituresByMatreculeAndPrix(choice: string, searchArray: string) {
    return this.http.get(this.apiUrl + "cherecherVoitures/"+choice+"/"+searchArray);
  }
}
