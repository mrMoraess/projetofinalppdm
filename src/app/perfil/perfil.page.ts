import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { 
  IonHeader, 
  IonToolbar, 
  IonTitle, 
  IonContent, 
  IonAvatar, 
  IonButton, 
  IonIcon 
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { logOutOutline } from 'ionicons/icons';
import { AgendamentoService } from '../shared/services/agendamento.service';
import { UsuarioService } from '../shared/services/usuario.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonHeader, IonToolbar, IonTitle, IonContent, IonAvatar, IonButton, IonIcon]
})
export class PerfilPage {
  // Inicializamos as variáveis como vazias
  userName: string = '';
  userEmail: string = '';

  constructor(
    private router: Router,
    private agendamentoService: AgendamentoService,
    private usuarioService: UsuarioService
  ) {
    addIcons({ logOutOutline });
  }
  
  // --- ESTA É A PARTE CRUCIAL QUE FALTAVA ---
  // Este método é executado toda vez que a página vai ser exibida
  ionViewWillEnter() {
    console.log('[PERFIL] Página sendo exibida, buscando dados do usuário...');
    const usuarioLogado = this.usuarioService.getUsuarioLogado();
    
    if (usuarioLogado) {
      // Atualiza as variáveis da página com os dados do usuário logado
      this.userName = usuarioLogado.nome;
      this.userEmail = usuarioLogado.email;
      console.log('[PERFIL] Dados encontrados:', this.userName);
    } else {
      console.log('[PERFIL] Nenhum usuário logado encontrado.');
    }
  }

  logout() {
    this.agendamentoService.limparAgendamentos();
    this.usuarioService.logout();
    this.router.navigate(['/features/auth/pages/login']);
  }
}