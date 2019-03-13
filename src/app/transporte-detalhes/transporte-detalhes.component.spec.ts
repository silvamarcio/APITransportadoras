import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransporteDetalhesComponent } from './transporte-detalhes.component';

describe('TransporteDetalhesComponent', () => {
  let component: TransporteDetalhesComponent;
  let fixture: ComponentFixture<TransporteDetalhesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransporteDetalhesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransporteDetalhesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
