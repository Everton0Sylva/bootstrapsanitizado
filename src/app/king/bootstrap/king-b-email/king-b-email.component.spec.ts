import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KingBEmailComponent } from './king-b-email.component';

describe('KingBEmailComponent', () => {
  let component: KingBEmailComponent;
  let fixture: ComponentFixture<KingBEmailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KingBEmailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KingBEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
