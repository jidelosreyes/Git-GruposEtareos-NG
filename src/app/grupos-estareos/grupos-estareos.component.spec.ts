import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GruposEstareosComponent } from './grupos-estareos.component';

describe('GruposEstareosComponent', () => {
  let component: GruposEstareosComponent;
  let fixture: ComponentFixture<GruposEstareosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GruposEstareosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GruposEstareosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
