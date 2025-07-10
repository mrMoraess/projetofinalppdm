import { Component } from '@angular/core';
import { CommonModule, DatePipe, CurrencyPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { 
  IonHeader, 
  IonToolbar, 
  IonTitle, 
  IonContent, 
  IonButtons, 
  IonBackButton, 
  IonCard, 
  IonCardHeader, 
  IonCardTitle, 
  IonCardContent, 
  IonButton, 
  IonIcon 
} from '@ionic/angular/standalone';
import { ToastController } from '@ionic/angular'; // 1. O ToastController é importado daqui
import { addIcons } from 'ionicons';
import { checkmarkCircleOutline } from 'ionicons/icons';
import { AgendamentoService } from '../shared/services/agendamento.service';

@Component({
  selector: 'app-confirmar-agendamento',
  templateUrl: './confirmar-agendamento.page.html',
  styleUrls: ['./confirmar-agendamento.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonBackButton, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonButton, IonIcon, DatePipe, CurrencyPipe]
})
export class ConfirmarAgendamentoPage {

  public agendamento: any = {};

  constructor(
    private router: Router,
    private agendamentoService: AgendamentoService,
    private toastController: ToastController
  ) {
    const navigation = this.router.getCurrentNavigation();
    this.agendamento.servico = navigation?.extras?.state?.['servico'];
    this.agendamento.barbeiro = navigation?.extras?.state?.['barbeiro'];
    this.agendamento.dataHora = navigation?.extras?.state?.['dataHora'];
    addIcons({ checkmarkCircleOutline });
  }

  async finalizar() {
    this.agendamentoService.addAgendamento(this.agendamento);
    
    const toast = await this.toastController.create({
      message: 'Agendamento confirmado com sucesso!',
      duration: 2000,
      color: 'success',
      position: 'top'
    });
    await toast.present();
    
    this.router.navigate(['/tabs/agendar']);
  }
}