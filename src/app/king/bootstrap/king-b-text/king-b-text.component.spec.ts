import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KingBTextComponent } from './king-b-text.component';

describe('KingBTextComponent', () => {
  let component: KingBTextComponent;
  let fixture: ComponentFixture<KingBTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KingBTextComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KingBTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
