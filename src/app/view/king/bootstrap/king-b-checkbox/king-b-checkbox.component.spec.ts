import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KingBCheckboxComponent } from './king-b-checkbox.component';

describe('KingBCheckboxComponent', () => {
  let component: KingBCheckboxComponent;
  let fixture: ComponentFixture<KingBCheckboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KingBCheckboxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KingBCheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
