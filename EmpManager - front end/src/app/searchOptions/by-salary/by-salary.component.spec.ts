import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BySalaryComponent } from './by-salary.component';

describe('BySalaryComponent', () => {
  let component: BySalaryComponent;
  let fixture: ComponentFixture<BySalaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BySalaryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BySalaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
