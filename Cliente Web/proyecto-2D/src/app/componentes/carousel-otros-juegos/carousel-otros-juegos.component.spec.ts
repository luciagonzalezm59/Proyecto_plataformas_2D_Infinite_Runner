import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselOtrosJuegosComponent } from './carousel-otros-juegos.component';

describe('CarouselOtrosJuegosComponent', () => {
  let component: CarouselOtrosJuegosComponent;
  let fixture: ComponentFixture<CarouselOtrosJuegosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarouselOtrosJuegosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarouselOtrosJuegosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
