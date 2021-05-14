import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KingBTimeComponent } from './king-b-time.component';

describe('KingBTimeComponent', () => {
  let component: KingBTimeComponent;
  let fixture: ComponentFixture<KingBTimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KingBTimeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KingBTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
