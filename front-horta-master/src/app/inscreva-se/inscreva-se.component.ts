import { Cliente } from '../Clientes/inscreva-se';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'inscreva-se',
  templateUrl: './inscreva-se.component.html',
  styleUrls: ['./inscreva-se.component.css', '../../assets/css/forms.css']
})
export class InscrevaSeComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
  }

  title = 'Inscreva-se'
}
