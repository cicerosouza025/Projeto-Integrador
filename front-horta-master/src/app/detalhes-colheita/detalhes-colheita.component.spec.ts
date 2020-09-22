import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalhesColheitaComponent } from './detalhes-colheita.component';

describe('DetalhesColheitaComponent', () => {
  let component: DetalhesColheitaComponent;
  let fixture: ComponentFixture<DetalhesColheitaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalhesColheitaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalhesColheitaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
