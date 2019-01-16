import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-biding',
  templateUrl: './data-biding.component.html',
  styleUrls: ['./data-biding.component.css']
})
export class DataBidingComponent implements OnInit {

  url: String = 'http://loiane.training';
  cursoAngular: Boolean = true;
  urlImage: String = 'http://guillermovilaseca.com.ar/wp-content/uploads/2010/07/camino_en_bosque_amarillo_1024x768.jpg';

  valorAtual: String = '';
  valorSalvo;
  isMouseOver: Boolean = false;
  aluno = [{idalu: null , nome: null
  }];
  alunos = [];
  idaluno: any = 0;
  nome: String = 'abc';
  pessoa: any = { nome: 'def', idade: 20 };
  nomeDoCurso: String = 'Angular';
  valorIncial = 15;

  getValor() {
    return 1;
  }

  getCurtirCurso() {
    return true;
  }
  getBotaoClicado() {
    alert('Botão Clicado');
  }
  onKeyUp(evento: KeyboardEvent) {
    this.valorAtual = (<HTMLInputElement>event.target).value;
  }
  salvarValor(valor) {
    this.idaluno = this.idaluno + 1;
    this.valorSalvo = valor;
    this.aluno = [{idalu: this.idaluno , nome: valor
    }];
    this.aluno = [this.idaluno, valor];
    this.alunos.push( this.aluno );
  }
  onMouseOverOut() {
    this.isMouseOver = !this.isMouseOver;
  }
  onMudouValor(evento) {
    console.log(evento.novoValor);

  }
  constructor() { }

  ngOnInit() {
  }
}
