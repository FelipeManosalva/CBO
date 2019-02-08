import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrillaPruebaComponent } from './grilla-prueba.component';

describe('GrillaPruebaComponent', () => {
  let component: GrillaPruebaComponent;
  let fixture: ComponentFixture<GrillaPruebaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrillaPruebaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrillaPruebaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
