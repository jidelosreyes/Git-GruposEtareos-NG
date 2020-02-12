import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IGruposEtareos } from './grupos-estareos/IGruposEtareos';
import { ISexo } from './grupos-estareos/ISexo';
import { IUnidadMedida } from './grupos-estareos/IUnidadMedida';

const httpOptions = {
  headers: new HttpHeaders({ 
    'Content-Type': 'application/json',
    //'Access-Control-Allow-Origin': 'http://localhost:8087'
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
    //httpOptions.headers.append('Access-Control-Allow-Origin', 'http://localhost:4200');
    // httpOptions.headers.append('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    // httpOptions.headers.append('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    // httpOptions.headers.append('Access-Control-Allow-Credentials', 'true');

    return this.http.get<IGruposEtareos[]>('http://localhost:8087/PruebasGruposEtareos/api/Ps_Grupos_Etareos');
  }

  setData(iGruposEtareos: IGruposEtareos) {
      return this.http.post<IGruposEtareos>('http://localhost:8087/PruebasGruposEtareos/api/Ps_Grupos_Etareos', 
        { COD_SEXO: iGruposEtareos.COD_SEXO, 
          EDAD_MINIMA: iGruposEtareos.EDAD_MINIMA, 
          EDAD_MAXIMA: iGruposEtareos.EDAD_MAXIMA, 
          ID_UNIDADMEDIDA: iGruposEtareos.ID_UNIDADMEDIDA, 
          DESC_GRUPOETAREO: iGruposEtareos.DESC_GRUPOETAREO, 
          ESTADO_GRUPOETAREO: iGruposEtareos.ESTADO_GRUPOETAREO, 
          COD_USUARIO: iGruposEtareos.COD_USUARIO
        });
  }

  getSexo() {
    return this.http.get<ISexo[]>('http://localhost:8087/PruebasGruposEtareos/api/aSEXO');
  }

  getUnidadMedida(){
    return this.http.get<IUnidadMedida[]>('http://localhost:8087/PruebasGruposEtareos/api/aUnidadMedida');
  }
}
