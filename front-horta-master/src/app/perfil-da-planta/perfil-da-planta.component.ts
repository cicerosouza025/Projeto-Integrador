import { Component, OnInit } from '@angular/core';

import { Planta } from '../plantas/plantas.model';

@Component({
  selector: 'app-perfil-da-planta',
  templateUrl: '../paginas.html',
  styleUrls: ['./perfil-da-planta.component.css']
})
export class PerfilDaPlantaComponent implements OnInit {

  planta: Planta = new Planta('Cenoura', 'É laranja', 'url');
  title = this.planta.nome;

  constructor() { }

  ngOnInit(): void {
  }


}
