import { DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component';
import { ExtratoComponent } from './views/extrato/extrato.component';
import { registerLocaleData } from '@angular/common';
import localePt  from '@angular/common/locales/pt'
import { HttpClientModule } from '@angular/common/http';

registerLocaleData(localePt,'pt')

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ExtratoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  
   
  ],
  providers: [
    {provide:LOCALE_ID, useValue: 'pt'},
    {provide: DEFAULT_CURRENCY_CODE,
      useValue: 'BRL'
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
