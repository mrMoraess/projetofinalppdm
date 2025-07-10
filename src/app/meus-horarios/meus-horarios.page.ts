import { Component } from '@angular/core';
import { CommonModule, DatePipe, CurrencyPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { 
  IonHeader, 
  IonToolbar, 
  IonTitle, 
  IonContent, 
  IonCard, 
  IonCardHeader, 
  IonCardTitle, 
  IonCardContent, 
  IonNote 
} from '@ionic/angular/standalone';
import { AgendamentoService } from '../shared/services/agendamento.service';

@Component({
  selector: 'app-meus-horarios',
  templateUrl: './meus-horarios.page.html',
  styleUrls: ['./meus-horarios.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonNote, DatePipe, CurrencyPipe]
})
export class MeusHorariosPage {

  public agendamentos: any[] = [];

  constructor(private agendamentoService: AgendamentoService) {}

  // ionViewWillEnter é disparado TODA VEZ que a aba é selecionada
  ionViewWillEnter() {
    console.log('%c[MEUS HORÁRIOS] Página sendo exibida, buscando agendamentos...', 'color: purple');
    // Busca a lista mais atualizada do serviço e atribui à variável da página
    this.agendamentos = this.agendamentoService.getAgendamentos();
    console.log('%c[MEUS HORÁRIOS] Agendamentos para exibir:', 'color: purple', this.agendamentos);
  }
}