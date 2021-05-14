import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KingBConsultaComponent } from './king-b-consulta.component';

describe('KingBConsultaComponent', () => {
  let component: KingBConsultaComponent;
  let fixture: ComponentFixture<KingBConsultaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KingBConsultaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KingBConsultaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
