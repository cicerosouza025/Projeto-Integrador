import { Component, OnInit } from '@angular/core';

import { Planta } from './plantas.model';
@Component({
  selector: 'app-plantas',
  templateUrl: '../paginas.html',
  styleUrls: ['./plantas.component.css']
})
export class PlantasComponent implements OnInit {

  plantas: Planta[] = [
    new Planta('Cenoura', 'Teste', 'url')
  ];

  constructor() { }

  ngOnInit(): void {
  }

  title='Plantas'
}
