import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreBatterieComponent } from './store-batterie.component';

describe('StoreBatterieComponent', () => {
  let component: StoreBatterieComponent;
  let fixture: ComponentFixture<StoreBatterieComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StoreBatterieComponent]
    });
    fixture = TestBed.createComponent(StoreBatterieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
