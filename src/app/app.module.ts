//Modulos
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { GridModule } from '@progress/kendo-angular-grid';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UiModule } from './ui/ui.module';
import { HttpClientModule } from '@angular/common/http';

//Componentes
import { GruposEstareosComponent } from './grupos-estareos/grupos-estareos.component';

//Servicios
import { GruposEtareosService } from './grupos-etareos.service';


@NgModule({
  declarations: [
    AppComponent,
    GruposEstareosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonsModule,
    BrowserAnimationsModule,
    UiModule,
    HttpClientModule,
    GridModule
  ],
  providers: [ GruposEtareosService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
