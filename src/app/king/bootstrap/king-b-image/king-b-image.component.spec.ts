import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KingBImageComponent } from './king-b-image.component';

describe('KingBImageComponent', () => {
  let component: KingBImageComponent;
  let fixture: ComponentFixture<KingBImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KingBImageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KingBImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
