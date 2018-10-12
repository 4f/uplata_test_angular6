import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BezopasnostComponent } from './bezopasnost.component';

describe('BezopasnostComponent', () => {
  let component: BezopasnostComponent;
  let fixture: ComponentFixture<BezopasnostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BezopasnostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BezopasnostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
