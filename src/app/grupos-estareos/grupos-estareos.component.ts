import { Component, OnInit } from '@angular/core';
import { GruposEtareosService } from '../grupos-etareos.service';
import { IGruposEtareos } from './IGruposEtareos';


@Component({
  selector: 'grupos-estareos',
  templateUrl: './grupos-estareos.component.html',
  styleUrls: ['./grupos-estareos.component.css']
})
export class GruposEstareosComponent implements OnInit {
  GruposEtareos: IGruposEtareos[];

  constructor(private grupoEtareosServices: GruposEtareosService) { 
    this.grupoEtareosServices.getData().subscribe(data => {
      this.GruposEtareos = data;
    });
  }

  ngOnInit() {
  }

}
