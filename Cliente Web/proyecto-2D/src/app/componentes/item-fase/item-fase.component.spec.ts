import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemFaseComponent } from './item-fase.component';

describe('ItemFaseComponent', () => {
  let component: ItemFaseComponent;
  let fixture: ComponentFixture<ItemFaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ItemFaseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemFaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
