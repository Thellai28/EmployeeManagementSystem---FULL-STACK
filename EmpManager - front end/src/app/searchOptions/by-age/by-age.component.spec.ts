import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ByAgeComponent } from './by-age.component';

describe('ByAgeComponent', () => {
  let component: ByAgeComponent;
  let fixture: ComponentFixture<ByAgeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ByAgeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ByAgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
