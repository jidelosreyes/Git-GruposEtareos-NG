import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IGruposEtareos } from './grupos-estareos/IGruposEtareos';

const httpOptions = {
  headers: new HttpHeaders({ 
    'Content-Type': 'application/json',
    // 'Access-Control-Allow-Origin': '*',
    // 'Access-Control-Allow-Methods': '*'
    //'Authorization':'authkey',
    //'userid':'1' 
  })
};

@Injectable({
  providedIn: 'root'
})
export class GruposEtareosService {

  constructor(private http: HttpClient) { }

  getData() {
    // httpOptions.headers.append('Access-Control-Allow-Origin', 'http://localhost:8087');
    // httpOptions.headers.append('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    // httpOptions.headers.append('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    // httpOptions.headers.append('Access-Control-Allow-Credentials', 'true');

    return this.http.get<IGruposEtareos[]>('http://localhost:8087/API/api/GruposEtareos/Ps_Grupos_Etareos');
  }
}
