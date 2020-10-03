import { Component, OnInit } from '@angular/core';
import { Customer } from '../interfaces';

@Component({
  selector: 'rw-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  name:string ='Jonathan';

  

  dishes:Array<string>=[
    'Arroz con Pollo',
    'Escabeche de Pollo',
    'Chanfainita Combinada',
    'Ceviche',
    'Cau-cau',
    'Pollo a la brasa',
    'Tacu Tacu',
    'Tallarin rojo con su rica huancaina'
  ];
  constructor() {
    this.listDishes();
   }

  ngOnInit(): void {
  }

  listDishes() : void{
    this.dishes.forEach((dish, i) =>{
      console.log(i+1 + ' - '+ dish);
    });
  }

  
}
