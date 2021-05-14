import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KingBNumberComponent } from './king-b-number.component';

describe('KingBNumberComponent', () => {
  let component: KingBNumberComponent;
  let fixture: ComponentFixture<KingBNumberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KingBNumberComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KingBNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
