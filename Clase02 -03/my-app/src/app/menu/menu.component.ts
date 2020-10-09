import { Component, OnInit } from '@angular/core';
import {Customer, Dish} from '@rw/models';
import * as JsonDishes from './../../assets/dishes.json';

@Component({
  selector: 'rw-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  
  nombre:string ='Jonathan';
  ResultHijo: Dish;
  dishes:Dish;

  
  constructor() {
    
    //  this.listDishes();
   }

  ngOnInit(): void {
    
  }

  // listDishes() : void{
  //   this.dishes.forEach((dish, i) =>{
  //     console.log(i+1 + ' - '+ dish.name);
  //   });
  // }
  

  select(event){
    this.ResultHijo = event.name;
  }
}
