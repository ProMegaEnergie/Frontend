import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableSocieteComponent } from './table-societe.component';

describe('TableSocieteComponent', () => {
  let component: TableSocieteComponent;
  let fixture: ComponentFixture<TableSocieteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TableSocieteComponent]
    });
    fixture = TestBed.createComponent(TableSocieteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
