import { Component, OnInit } from '@angular/core';
//import { Country } from '../interfaces/country.interfaces';
import * as countriesJson from './../../assets/countries.json';
import {Country} from '@rw/models';
import { LowerCasePipe, UpperCasePipe } from '@angular/common';


@Component({
  selector: 'rw-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.scss'],
  providers: [UpperCasePipe,LowerCasePipe]
})
export class CountriesComponent implements OnInit {
 selected:Country;
 birtday:Date = new Date();
 total:number =12345;

 countries:Country[] = countriesJson;

  constructor(private upperCasePipe:UpperCasePipe, private lowerCasePipe: LowerCasePipe) { 
    
    this.selected = countriesJson[11];


    console.log(this.selected.currencies);
  }
  //Modelos de los datos.

  ngOnInit(): void {
  }

  send(name:string):void{
    console.log('Antes del pipe: '+name);
    name = this.upperCasePipe.transform(name)
    console.log('Despues del pipe: '+name);
    name = this.lowerCasePipe.transform(name);
    console.log("uso de LowerCase: "+ name);
  }
}
