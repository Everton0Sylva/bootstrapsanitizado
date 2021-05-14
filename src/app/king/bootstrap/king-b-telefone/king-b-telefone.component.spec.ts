import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KingBTelefoneComponent } from './king-b-telefone.component';

describe('KingBTelefoneComponent', () => {
  let component: KingBTelefoneComponent;
  let fixture: ComponentFixture<KingBTelefoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KingBTelefoneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KingBTelefoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
