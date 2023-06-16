import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPAgeComponent } from './add-page.component';

describe('AddPAgeComponent', () => {
  let component: AddPAgeComponent;
  let fixture: ComponentFixture<AddPAgeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddPAgeComponent]
    });
    fixture = TestBed.createComponent(AddPAgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
