import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KingBCheckgroupComponent } from './king-b-checkgroup.component';

describe('KingBCheckgroupComponent', () => {
  let component: KingBCheckgroupComponent;
  let fixture: ComponentFixture<KingBCheckgroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KingBCheckgroupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KingBCheckgroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
