import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KingBDataHoraComponent } from './king-b-data-hora.component';

describe('KingBDataHoraComponent', () => {
  let component: KingBDataHoraComponent;
  let fixture: ComponentFixture<KingBDataHoraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KingBDataHoraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KingBDataHoraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
