import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PorqueusarComponent } from './porqueusar.component';

describe('PorqueusarComponent', () => {
  let component: PorqueusarComponent;
  let fixture: ComponentFixture<PorqueusarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PorqueusarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PorqueusarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
