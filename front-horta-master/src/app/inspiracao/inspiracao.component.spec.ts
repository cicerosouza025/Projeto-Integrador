import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InspiracaoComponent } from './inspiracao.component';

describe('InspiracaoComponent', () => {
  let component: InspiracaoComponent;
  let fixture: ComponentFixture<InspiracaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InspiracaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InspiracaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
