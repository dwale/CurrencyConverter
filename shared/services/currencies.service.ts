import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import {Currency} from '../currency.model';

@Injectable()
export class CurrenciesService {
  currencies: any;
  constructor(private httpClient: HttpClient, private http: HttpClientModule) {
    this.currencies = [];
  }


  getCurrencyList() {
    this.httpClient.get('https://free.currencyconverterapi.com/api/v5/currencies')
      .subscribe((response: Currency) => {
        console.log('Response: ', response);
        console.log('Response: ', response.results);
        console.log('Response: ', response.results);
        this.currencies = response.results;
      });
  }
}
