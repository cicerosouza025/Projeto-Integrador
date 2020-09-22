import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OqueehComponent } from './oqueeh.component';

describe('OqueehComponent', () => {
  let component: OqueehComponent;
  let fixture: ComponentFixture<OqueehComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OqueehComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OqueehComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
