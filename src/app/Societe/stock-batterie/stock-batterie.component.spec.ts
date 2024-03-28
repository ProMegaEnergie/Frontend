import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockBatterieComponent } from './stock-batterie.component';

describe('StockBatterieComponent', () => {
  let component: StockBatterieComponent;
  let fixture: ComponentFixture<StockBatterieComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StockBatterieComponent]
    });
    fixture = TestBed.createComponent(StockBatterieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
