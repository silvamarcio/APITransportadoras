import { Component, OnInit } from '@angular/core';
import {Transportadora} from '../Transportadora';
import {ConsumeService} from '../consume.service';

@Component({
  selector: 'app-transportadora',
  templateUrl: './transportadora.component.html',
  styleUrls: ['./transportadora.component.css']
})
export class TransportadoraComponent implements OnInit {

  transp: Transportadora[];
  

  constructor(private consumeService: ConsumeService) { }

  ngOnInit() {
    this.getTransportadoras();
  }

  getTransportadoras(): void{
     this.consumeService.getTransport().subscribe(transp => this.transp = transp);
  }

}
