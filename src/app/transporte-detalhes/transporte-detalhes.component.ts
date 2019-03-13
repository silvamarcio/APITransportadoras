import { Component, OnInit, Input } from '@angular/core';
import {Transportadora} from '../Transportadora';

@Component({
  selector: 'app-transporte-detalhes',
  templateUrl: './transporte-detalhes.component.html',
  styleUrls: ['./transporte-detalhes.component.css']
})
export class TransporteDetalhesComponent implements OnInit {

  @Input() transpo: Transportadora;

  constructor() { }

  ngOnInit() {
  }

}
