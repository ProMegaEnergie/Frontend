import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class GlobalAppService {

  constructor(private http:HttpClient) { }

    private apiUrl = 'http://localhost:8080/api/';
    getApiUrl() {
        return this.apiUrl;
    }
}
