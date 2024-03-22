import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalAppService {
    private apiUrl = 'http://localhost:8080/api/';
    getApiUrl() {
        return this.apiUrl;
    }
}
