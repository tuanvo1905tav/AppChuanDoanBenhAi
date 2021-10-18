import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfectionPredictionComponent } from './infection-prediction.component';

describe('InfectionPredictionComponent', () => {
  let component: InfectionPredictionComponent;
  let fixture: ComponentFixture<InfectionPredictionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfectionPredictionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfectionPredictionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
