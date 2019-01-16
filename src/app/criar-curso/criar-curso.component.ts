import { CursosService } from './../cursos/cursos.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-criar-curso',
  templateUrl: './criar-curso.component.html',
  styleUrls: ['./criar-curso.component.css']
})
export class CriarCursoComponent implements OnInit {

  cursos: string[] = [];
  constructor(private _cursoService: CursosService) { }
  nomeCurso: string = '';
  ngOnInit() {
    this.cursos = this._cursoService.getCursos();
  }

  ondAddCurso() {
    this._cursoService.addCurso(this.nomeCurso);
  }

}
