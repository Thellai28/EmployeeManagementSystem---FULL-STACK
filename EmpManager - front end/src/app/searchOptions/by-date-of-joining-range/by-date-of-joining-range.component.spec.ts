import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ByDateOfJoiningRangeComponent } from './by-date-of-joining-range.component';

describe('ByDateOfJoiningRangeComponent', () => {
  let component: ByDateOfJoiningRangeComponent;
  let fixture: ComponentFixture<ByDateOfJoiningRangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ByDateOfJoiningRangeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ByDateOfJoiningRangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
