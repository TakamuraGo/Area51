import { Component, OnInit } from '@angular/core';

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
  constructor() { }

  ngOnInit(): void {
  }

}
