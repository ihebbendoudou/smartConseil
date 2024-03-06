import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Whoweare1Component } from './whoweare1.component';

describe('Whoweare1Component', () => {
  let component: Whoweare1Component;
  let fixture: ComponentFixture<Whoweare1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Whoweare1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Whoweare1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
