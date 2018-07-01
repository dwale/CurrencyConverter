import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { ServiceWorkerModule } from '@angular/service-worker';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { ConverterHomeComponent } from './converter-home/converter-home.component';
import {CurrenciesService} from './shared/services/currencies.service';
import {HttpClientModule} from '@angular/common/http';
import { MaterialModule } from './material.module';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ConverterHomeComponent
  ],
  imports: [
    BrowserModule,
    // ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production }),
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule
  ],
  providers: [CurrenciesService, HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
