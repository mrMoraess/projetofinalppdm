import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private readonly USERS_KEY = 'usuarios_cadastrados';
  private readonly LOGGED_USER_KEY = 'usuario_logado';

  constructor() { }

  // Cadastra um novo usuário
  registrar(usuario: any): boolean {
    let usuarios = this.getUsuarios();
    // Verifica se o email já existe
    if (usuarios.find(u => u.email === usuario.email)) {
      return false; // Email já cadastrado
    }
    usuarios.push(usuario);
    localStorage.setItem(this.USERS_KEY, JSON.stringify(usuarios));
    return true;
  }

  // Realiza o login
  login(email: string, senha: string):boolean {
    const usuarios = this.getUsuarios();
    const usuario = usuarios.find(u => u.email === email && u.senha === senha);
    if (usuario) {
      // Salva o usuário logado no Local Storage
      localStorage.setItem(this.LOGGED_USER_KEY, JSON.stringify(usuario));
      return true;
    }
    return false;
  }

  // Realiza o logout
  logout() {
    localStorage.removeItem(this.LOGGED_USER_KEY);
  }

  // Retorna os dados do usuário logado
  getUsuarioLogado() {
    const usuario = localStorage.getItem(this.LOGGED_USER_KEY);
    return usuario ? JSON.parse(usuario) : null;
  }

  // Método auxiliar para pegar a lista de todos os usuários
  private getUsuarios(): any[] {
    const usuarios = localStorage.getItem(this.USERS_KEY);
    return usuarios ? JSON.parse(usuarios) : [];
  }
}