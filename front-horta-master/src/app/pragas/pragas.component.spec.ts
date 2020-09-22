import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PragasComponent } from './pragas.component';

describe('PragasComponent', () => {
  let component: PragasComponent;
  let fixture: ComponentFixture<PragasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PragasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PragasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
