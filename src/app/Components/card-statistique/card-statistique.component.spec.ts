import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardStatistiqueComponent } from './card-statistique.component';

describe('CardStatistiqueComponent', () => {
  let component: CardStatistiqueComponent;
  let fixture: ComponentFixture<CardStatistiqueComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardStatistiqueComponent]
    });
    fixture = TestBed.createComponent(CardStatistiqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
