import { Injectable } from '@angular/core';
import {Transportadora} from './Transportadora';
import {TranspList} from './TransportadorasTeste';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConsumeService {

  constructor() { }


  getTransport(): Observable<Transportadora[]> {
    return of(TranspList);
  }
  getTransporte(id: number): Observable<Transportadora>{
    return of(TranspList.find(transpo => transpo.id === id));
  }
}
