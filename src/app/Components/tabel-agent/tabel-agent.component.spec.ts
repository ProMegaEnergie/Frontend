import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabelAgentComponent } from './tabel-agent.component';

describe('TabelUserComponent', () => {
  let component: TabelAgentComponent;
  let fixture: ComponentFixture<TabelAgentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TabelAgentComponent]
    });
    fixture = TestBed.createComponent(TabelAgentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
