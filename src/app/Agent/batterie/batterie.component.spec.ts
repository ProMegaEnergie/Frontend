import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BatterieComponent } from './batterie.component';

describe('BatterieComponent', () => {
  let component: BatterieComponent;
  let fixture: ComponentFixture<BatterieComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BatterieComponent]
    });
    fixture = TestBed.createComponent(BatterieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
