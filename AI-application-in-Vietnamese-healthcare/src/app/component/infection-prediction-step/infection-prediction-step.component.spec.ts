import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfectionPredictionStepComponent } from './infection-prediction-step.component';

describe('InfectionPredictionStepComponent', () => {
  let component: InfectionPredictionStepComponent;
  let fixture: ComponentFixture<InfectionPredictionStepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfectionPredictionStepComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfectionPredictionStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
