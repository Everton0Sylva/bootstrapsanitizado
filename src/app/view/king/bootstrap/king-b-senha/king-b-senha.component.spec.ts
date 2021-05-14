import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KingBSenhaComponent } from './king-b-senha.component';

describe('KingBSenhaComponent', () => {
  let component: KingBSenhaComponent;
  let fixture: ComponentFixture<KingBSenhaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KingBSenhaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KingBSenhaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
