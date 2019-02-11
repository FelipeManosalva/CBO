import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarCboComponent } from './navbar-cbo.component';

describe('NavbarCboComponent', () => {
  let component: NavbarCboComponent;
  let fixture: ComponentFixture<NavbarCboComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavbarCboComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarCboComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
