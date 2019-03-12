import { Component, OnInit } from '@angular/core';
import {Transportadora} from '../Transportadora';
import {TranspList} from '../TransportadorasTeste';

@Component({
  selector: 'app-transportadora',
  templateUrl: './transportadora.component.html',
  styleUrls: ['./transportadora.component.css']
})
export class TransportadoraComponent implements OnInit {

  transp = TranspList;
  transpSelecionada: Transportadora;

  constructor() { }

  ngOnInit() {
  }

  onSelect(transport: Transportadora): void {
    this.transpSelecionada = transport;
  }

}
