import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConfirmarAgendamentoPage } from './confirmar-agendamento.page';

describe('ConfirmarAgendamentoPage', () => {
  let component: ConfirmarAgendamentoPage;
  let fixture: ComponentFixture<ConfirmarAgendamentoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmarAgendamentoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
