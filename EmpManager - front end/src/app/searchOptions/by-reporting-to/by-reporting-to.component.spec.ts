import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ByReportingToComponent } from './by-reporting-to.component';

describe('ByReportingToComponent', () => {
  let component: ByReportingToComponent;
  let fixture: ComponentFixture<ByReportingToComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ByReportingToComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ByReportingToComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
