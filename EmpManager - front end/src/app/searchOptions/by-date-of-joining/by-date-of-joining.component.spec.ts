import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ByDateOfJoiningComponent } from './by-date-of-joining.component';

describe('ByDateOfJoiningComponent', () => {
  let component: ByDateOfJoiningComponent;
  let fixture: ComponentFixture<ByDateOfJoiningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ByDateOfJoiningComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ByDateOfJoiningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
