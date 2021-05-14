import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KingBDateComponent } from './king-b-date.component';

describe('KingBDateComponent', () => {
  let component: KingBDateComponent;
  let fixture: ComponentFixture<KingBDateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KingBDateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KingBDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
