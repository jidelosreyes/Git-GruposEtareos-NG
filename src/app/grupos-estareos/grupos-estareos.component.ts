import { Component, OnInit } from '@angular/core';
import { GruposEtareosService } from '../grupos-etareos.service';
import { IGruposEtareos } from './IGruposEtareos';
import { ISexo } from './ISexo';
import { IUnidadMedida } from './IUnidadMedida';


@Component({
  selector: 'grupos-estareos',
  templateUrl: './grupos-estareos.component.html',
  styleUrls: ['./grupos-estareos.component.css', '../../Content/qdata-stylos.css']
})
export class GruposEstareosComponent implements OnInit {
  GruposEtareos: IGruposEtareos[];
  Sexo: ISexo[] = [{COD_SEXO: "-1", DESC_SEXO: "Seleccione>>", APLICA_AFILIACION: ""}];
  UnidadMedida: IUnidadMedida[] = [{ID_UNIDADMEDIDA: -1, DESC_UNIDADMEDIDA: "Seleccione>>"}];

  ID: Number;
  COD_SEXO: string;
  DESC_SEXO: string;
  EDAD_MINIMA: number;
  EDAD_MAXIMA: number;
  ID_UNIDADMEDIDA: number;
  DESC_UNIDADMEDIDA: string;
  DESC_GRUPOETAREO: string;
  ESTADO_GRUPOETAREO: boolean;
  COD_USUARIO: string;
  
  iGruposEtareos: IGruposEtareos = {
    ID: this.ID,
    COD_SEXO: this.COD_SEXO,
    DESC_SEXO: this.DESC_SEXO,
    EDAD_MINIMA: this.EDAD_MINIMA,
    EDAD_MAXIMA: this.EDAD_MAXIMA,
    ID_UNIDADMEDIDA: this.ID_UNIDADMEDIDA,
    DESC_UNIDADMEDIDA: this.DESC_UNIDADMEDIDA,
    DESC_GRUPOETAREO: this.DESC_GRUPOETAREO,
    ESTADO_GRUPOETAREO: this.ESTADO_GRUPOETAREO,
    COD_USUARIO: this.COD_USUARIO
  };


  constructor(private grupoEtareosServices: GruposEtareosService) { 
    this.grupoEtareosServices.getData().subscribe(data => {
      this.GruposEtareos = data;
    });

    this.grupoEtareosServices.getSexo().subscribe(data => {
      data.forEach(element => {        
        this.Sexo.push(element);
      });
    });

    this.grupoEtareosServices.getUnidadMedida().subscribe(data => {
      data.forEach(element => {        
        this.UnidadMedida.push(element);
      });
    });
  }

  ngOnInit() {
  }

  setData() {
    this.grupoEtareosServices.setData(this.iGruposEtareos).subscribe(dataPut => {
      alert(dataPut.ID)
      if (dataPut.ID !== 0){

      }
      this.grupoEtareosServices.getData().subscribe(data => {
        this.GruposEtareos = data;
      });
    });
  }  

}
