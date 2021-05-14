import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KingBTextareaComponent } from './king-b-textarea.component';

describe('KingBTextareaComponent', () => {
  let component: KingBTextareaComponent;
  let fixture: ComponentFixture<KingBTextareaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KingBTextareaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KingBTextareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
