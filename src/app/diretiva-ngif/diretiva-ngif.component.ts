import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretiva-ngif',
  templateUrl: './diretiva-ngif.component.html',
  styleUrls: ['./diretiva-ngif.component.css']
})
export class DiretivaNgifComponent implements OnInit {

  cursos: String [] = ['angular'];
  mostrarCurso: Boolean = false;
  constructor() { }

  ngOnInit() {
  }
  mostraCurso() {
    this.mostrarCurso = !this.mostrarCurso;
  }

}
