import { Component, OnInit } from '@angular/core';

import { Planta } from './../plantas.model';

@Component({
  selector: 'app-minhas-plantas',
  templateUrl: './minhas-plantas.component.html',
  styleUrls: ['./minhas-plantas.component.css']
})
export class MinhasPlantasComponent implements OnInit {

  minhasPlantas: Planta[] = [
    new Planta('Cenoura', 'É laranja', 'url'),
    new Planta('Tomate', 'É vermelho', 'url'),
    new Planta('Alface', 'É verde', 'url'),
    new Planta('Cenoura', 'É laranja', 'url'),
    new Planta('Tomate', 'É vermelho', 'url'),
    new Planta('Cenoura', 'É laranja', 'url')
  ];
  title = 'Minhas Plantas';

  constructor() { }

  ngOnInit(): void {
  }

}
