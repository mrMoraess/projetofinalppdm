import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router'; // 1. Importe o RouterModule aqui
import { 
  ToastController, 
  IonHeader, 
  IonToolbar, 
  IonTitle, 
  IonContent, 
  IonList, 
  IonItem, 
  IonInput, 
  IonButton,
  IonButtons,
  IonBackButton
} from '@ionic/angular/standalone';
import { UsuarioService } from '../../../../shared/services/usuario.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
  standalone: true,
  imports: [
    CommonModule, 
    FormsModule,
    RouterModule, // 2. Adicione o RouterModule aqui
    IonHeader, 
    IonToolbar, 
    IonTitle, 
    IonContent, 
    IonList, 
    IonItem, 
    IonInput, 
    IonButton,
    IonButtons,
    IonBackButton
  ]
})
export class CadastroPage {
  nome = '';
  email = '';
  senha = '';
  confirmarSenha = '';

  constructor(
    private usuarioService: UsuarioService,
    private toastController: ToastController,
    private router: Router
  ) { }

  async fazerCadastro() {
    if (this.senha !== this.confirmarSenha) {
      this.presentToast('As senhas não correspondem.', 'danger');
      return; 
    }

    const usuario = { nome: this.nome, email: this.email, senha: this.senha };
    const sucesso = this.usuarioService.registrar(usuario);

    if (sucesso) {
      this.presentToast('Cadastro realizado com sucesso!', 'success');
      this.router.navigate(['/features/auth/pages/login']);
    } else {
      this.presentToast('Erro: E-mail já cadastrado.', 'danger');
    }
  }

  async presentToast(message: string, color: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000,
      color: color
    });
    await toast.present();
  }
}