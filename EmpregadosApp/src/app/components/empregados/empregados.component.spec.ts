import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpregadosComponent } from './empregados.component';

describe('EmpregadosComponent', () => {
  let component: EmpregadosComponent;
  let fixture: ComponentFixture<EmpregadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpregadosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpregadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
