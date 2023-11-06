import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css'],
})
export class DataBindingComponent {
  url: string = 'https://marinhomich.dev';
  valorAtual: string = '';
  cursoAngular: boolean = true;
  urlImagem: string =
    'https://images.unsplash.com/photo-1698779166596-b8f0c80c9a13?auto=format&fit=crop&q=80&w=1984&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';

  constructor() {}

  getValor() {
    return 1;
  }

  getCurtirCurso() {
    return true;
  }

  botaoClicado() {
    alert('ALERATA');
  }

  onKeyUp(event: KeyboardEvent) {
    this.valorAtual = (<HTMLInputElement>event.target).value;
  }
}
