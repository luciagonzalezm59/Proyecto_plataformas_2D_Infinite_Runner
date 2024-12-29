import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaFasesComponent } from './lista-fases.component';

describe('ListaFasesComponent', () => {
  let component: ListaFasesComponent;
  let fixture: ComponentFixture<ListaFasesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaFasesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaFasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
