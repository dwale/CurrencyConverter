import { Component, OnInit } from '@angular/core';
import {CurrenciesService} from '../shared/services/currencies.service';
import {Currency} from '../shared/currency.model';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-converter-home',
  templateUrl: './converter-home.component.html',
  styleUrls: ['./converter-home.component.css'],
})
export class ConverterHomeComponent implements OnInit {
  currencies: any;
  selectedSymbol: any;
  rightNow: any;
  fromValue: number;
  answerDisplay: number ;
  showSpinner: boolean ;
  toCurrency: number;
  fromCurrency: number;
  exchangeRate: any;

  constructor(private httpClient: HttpClient) {
  }

  ngOnInit() {
    this.currencies = [];
this.getCurrencyList();
this.rightNow = new Date();
this.fromValue = 0;
this.fromCurrency = 0;
this.toCurrency = 0;
this.answerDisplay = 0;
this.showSpinner = false;
this.exchangeRate = 0;
  }

  showAnswer() {
    this.showSpinner = true;
const query = this.toCurrency + '_' + this.fromCurrency;
console.log(query);
    this.httpClient.get('https://free.currencyconverterapi.com/api/v5/convert?q=' + query + '&compact=y')
      .subscribe((response) => {
        console.log('hgdsgjhg', response);
        for (const key in response) {
          this.exchangeRate = response[key];
        }
      });
    setTimeout(() => {
      console.log('FromCurrency', this.fromCurrency);
      console.log('ToCurrency', this.toCurrency);
      console.log('From Value', this.fromValue);
      for (const key in this.exchangeRate) {
        this.exchangeRate = this.exchangeRate[key];
      }
      console.log('From Value', this.exchangeRate);

      this.answerDisplay = this.exchangeRate * this.fromValue;
      console.log('From Value', this.answerDisplay);
      this.showSpinner = false;
    }, 2000);
  }


  getCurrencyList() {
    this.httpClient.get('https://free.currencyconverterapi.com/api/v5/currencies')
      .subscribe((response: Currency) => {
        console.log('hgdsgjhg', response.results);
        const objLength = Object.keys(response.results);
        console.log('KEY LENGHT', objLength.length);
          let OBJ ;

          for (const key in response.results) {
              OBJ = response.results[key];
            this.currencies.push(OBJ);
        }
        console.log('gggg', this.currencies);

      });
        }

displaySelectedCurrencySymbol (id) {
  console.log('id', id);
}
}
