import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarScreenComponent } from './navbar-screen.component';

describe('NavbarScreenComponent', () => {
  let component: NavbarScreenComponent;
  let fixture: ComponentFixture<NavbarScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavbarScreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
