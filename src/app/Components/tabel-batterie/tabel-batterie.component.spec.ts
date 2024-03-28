import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabelBatterieComponent } from './tabel-batterie.component';

describe('TabelBatterieComponent', () => {
  let component: TabelBatterieComponent;
  let fixture: ComponentFixture<TabelBatterieComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TabelBatterieComponent]
    });
    fixture = TestBed.createComponent(TabelBatterieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
