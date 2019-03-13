import { Component, OnInit, Input } from '@angular/core';
import {Transportadora} from '../Transportadora';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import {ConsumeService} from '../consume.service';

@Component({
  selector: 'app-transporte-detalhes',
  templateUrl: './transporte-detalhes.component.html',
  styleUrls: ['./transporte-detalhes.component.css']
})
export class TransporteDetalhesComponent implements OnInit {

  transpo: Transportadora;

  constructor(
    private route: ActivatedRoute,
    private transporteService: ConsumeService,
    private location: Location

  ) { }

  ngOnInit(): void {
    this.getTransport();
  }

  getTransport(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.transporteService.getTransporte(id).subscribe(transpo => this.transpo = transpo);
  }
  goBack(): void{
    this.location.back();
  }

}
