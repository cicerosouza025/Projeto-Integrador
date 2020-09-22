import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InscrevaSeComponent } from './inscreva-se.component';

describe('InscrevaSeComponent', () => {
  let component: InscrevaSeComponent;
  let fixture: ComponentFixture<InscrevaSeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InscrevaSeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InscrevaSeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
