import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KingBSelectComponent } from './king-b-select.component';

describe('KingBSelectComponent', () => {
  let component: KingBSelectComponent;
  let fixture: ComponentFixture<KingBSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KingBSelectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KingBSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
