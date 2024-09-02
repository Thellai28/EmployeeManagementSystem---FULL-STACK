import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ByAgeRangeComponent } from './by-age-range.component';

describe('ByAgeRangeComponent', () => {
  let component: ByAgeRangeComponent;
  let fixture: ComponentFixture<ByAgeRangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ByAgeRangeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ByAgeRangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
