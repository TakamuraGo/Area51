import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Dish } from '../interfaces';

@Component({
  selector: 'rw-dish',
  templateUrl: './dish.component.html',
  styleUrls: ['./dish.component.scss']
})
export class DishComponent implements OnInit {


  //Usando Getter y Setter.
  private _objDish:Dish;
  private _name:string;
  private _totalIngredients:number;

  @Input() set dish(value: Dish){
    console.log(value);
    this._name = this.generateName(value.name);
    this._objDish = this.generateObj(value);
    this._totalIngredients = value.ingredients.length; 
  }
  get name(): string{
    return this._name;
  }
  get totalIngredients(): number{
    return this._totalIngredients;
  }

  get objtDish():Dish{
    return this._objDish;
  }

  @Output() enviarHijo = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
  generateName(name:string) : string{
    return 'El platillo es: ' + name;
  }

  generateObj(obj:Dish){
    return obj;
  }

  notify(obj){
    return this.enviarHijo.emit(obj);
  }
}
