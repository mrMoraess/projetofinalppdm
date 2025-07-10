import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';
import { 
  IonHeader, 
  IonToolbar, 
  IonTitle, 
  IonContent, 
  IonList, 
  IonItem, 
  IonInput, 
  IonButton 
} from '@ionic/angular/standalone';
import { AgendamentoService } from '../../../../shared/services/agendamento.service';
import { UsuarioService } from '../../../../shared/services/usuario.service';
import { ToastController } from '@ionic/angular/standalone';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html', // Esta linha estava provavelmente em falta
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonList,
    IonItem,
    IonInput,
    IonButton,
  ],
})
export class LoginPage {
  email = '';
  senha = '';

  constructor(
    private router: Router,
    private agendamentoService: AgendamentoService,
    private usuarioService: UsuarioService,
    private toastController: ToastController
  ) {}

  async fazerLogin() {
    const sucesso = this.usuarioService.login(this.email, this.senha);
    if (sucesso) {
      console.log('%c[LOGIN] Clicou em Entrar. Chamando o serviço para carregar os dados...', 'color: orange');
      this.agendamentoService.carregarDados();
      this.router.navigate(['/tabs/agendar']);
    } else {
      const toast = await this.toastController.create({
        message: 'E-mail ou senha inválidos.',
        duration: 2000,
        color: 'danger'
      });
      await toast.present();
    }
  }
}