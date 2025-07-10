import { Injectable } from '@angular/core';
import { UsuarioService } from './usuario.service'; // Importe o serviço de usuário

@Injectable({
  providedIn: 'root'
})
export class AgendamentoService {
  private _agendamentos: any[] = [];

  // Agora o serviço de agendamento precisa saber quem é o usuário
  constructor(private usuarioService: UsuarioService) {}

  // Retorna a chave de armazenamento única para o usuário logado
  private getStorageKey(): string | null {
    const usuario = this.usuarioService.getUsuarioLogado();
    if (usuario && usuario.email) {
      return 'agendamentos_' + usuario.email;
    }
    return null;
  }

  carregarDados() {
    const key = this.getStorageKey();
    if (!key) {
      this._agendamentos = [];
      return;
    }

    const dados = localStorage.getItem(key);
    this._agendamentos = dados ? JSON.parse(dados) : [];
    console.log(`Dados carregados para ${key}:`, this._agendamentos);
  }

  addAgendamento(agendamento: any) {
    this._agendamentos.push(agendamento);
    this.salvarAgendamentos();
  }

  getAgendamentos() {
    return this._agendamentos;
  }

  limparAgendamentos() {
    const key = this.getStorageKey(); // Pega a chave antes de fazer logout
    if (key) {
      localStorage.removeItem(key);
    }
    this._agendamentos = [];
    console.log(`Agendamentos limpos para a chave: ${key}`);
  }

  private salvarAgendamentos() {
    const key = this.getStorageKey();
    if (key) {
      localStorage.setItem(key, JSON.stringify(this._agendamentos));
      console.log(`Dados salvos para ${key}`);
    }
  }
}