import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ByDesignationComponent } from './by-designation.component';

describe('ByDesignationComponent', () => {
  let component: ByDesignationComponent;
  let fixture: ComponentFixture<ByDesignationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ByDesignationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ByDesignationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
