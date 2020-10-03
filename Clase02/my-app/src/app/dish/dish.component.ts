import { Component, Input, OnInit } from '@angular/core';
import { Dish } from '../interfaces';

@Component({
  selector: 'rw-dish',
  templateUrl: './dish.component.html',
  styleUrls: ['./dish.component.scss']
})
export class DishComponent implements OnInit {


  //Usando Getter y Setter.
  private _name ='';

  get name():string{
    return this._name;
  }
  @Input() set name(value:string){
    this._name = this.generateName(value);
    console.log(this.name);
  }

  constructor() { }

  ngOnInit(): void {
  }
  generateName(name:string) : string{
    return 'El platillo es: ' + name;
  }

}
