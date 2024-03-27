import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarSocieteComponent } from './navbar-societe.component';

describe('NavbarSocieteComponent', () => {
  let component: NavbarSocieteComponent;
  let fixture: ComponentFixture<NavbarSocieteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavbarSocieteComponent]
    });
    fixture = TestBed.createComponent(NavbarSocieteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
