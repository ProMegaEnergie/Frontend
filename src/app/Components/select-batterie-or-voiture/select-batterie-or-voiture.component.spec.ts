import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectBatterieOrVoitureComponent } from './select-batterie-or-voiture.component';

describe('SelectBatterieOrVoitureComponent', () => {
  let component: SelectBatterieOrVoitureComponent;
  let fixture: ComponentFixture<SelectBatterieOrVoitureComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SelectBatterieOrVoitureComponent]
    });
    fixture = TestBed.createComponent(SelectBatterieOrVoitureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
