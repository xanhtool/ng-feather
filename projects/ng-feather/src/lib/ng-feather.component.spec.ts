import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgFeatherComponent } from './ng-feather.component';

describe('NgFeatherComponent', () => {
  let component: NgFeatherComponent;
  let fixture: ComponentFixture<NgFeatherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgFeatherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgFeatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
