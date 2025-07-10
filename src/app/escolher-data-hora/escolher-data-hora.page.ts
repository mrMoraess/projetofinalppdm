import { Component } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { 
  IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonBackButton, 
  IonDatetime, IonCard, IonCardHeader, IonCardTitle, IonCardContent,
  IonModal, IonDatetimeButton, IonButton 
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-escolher-data-hora',
  templateUrl: './escolher-data-hora.page.html',
  styleUrls: ['./escolher-data-hora.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonBackButton, IonDatetime, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonModal, IonDatetimeButton, IonButton, DatePipe]
})
export class EscolherDataHoraPage {
  
  public servicoSelecionado: any;
  public barbeiroSelecionado: any;
  public dataHoraSelecionada: string | null = null;

  public hourValues = [9, 10, 11, 12, 14, 15, 16, 17, 18];
  public minuteValues = [0, 30];

  constructor(private router: Router) {
    const navigation = this.router.getCurrentNavigation();
    this.servicoSelecionado = navigation?.extras?.state?.['servico'];
    this.barbeiroSelecionado = navigation?.extras?.state?.['barbeiro'];
  }

  // Esta função é chamada pelo (ionChange) e atualiza a variável
  selecionarDataHora(event: any) {
    this.dataHoraSelecionada = event.detail.value;
    console.log('Data selecionada e armazenada:', this.dataHoraSelecionada);
  }

  // Esta função é chamada pelo botão "Prosseguir"
  avancarParaConfirmacao() {
    if (!this.dataHoraSelecionada) return;
    
    this.router.navigate(['/confirmar-agendamento'], {
      state: {
        servico: this.servicoSelecionado,
        barbeiro: this.barbeiroSelecionado,
        dataHora: this.dataHoraSelecionada
      }
    });
  }
}