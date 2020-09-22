import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'minha-conta',
  templateUrl: './minha-conta.component.html',
  styleUrls: ['./minha-conta.component.css', '../../assets/css/forms.css']
})
export class MinhaContaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  title="Minha Conta"
}
