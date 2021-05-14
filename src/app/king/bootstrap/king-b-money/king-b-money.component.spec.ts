import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KingBMoneyComponent } from './king-b-money.component';

describe('KingBMoneyComponent', () => {
  let component: KingBMoneyComponent;
  let fixture: ComponentFixture<KingBMoneyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KingBMoneyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KingBMoneyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
