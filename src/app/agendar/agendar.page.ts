import { Component } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router'; // 1. Importe o Router
import { 
  IonHeader, 
  IonToolbar, 
  IonTitle, 
  IonContent,
  IonList,
  IonItem,
  IonLabel,
  IonNote
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-agendar',
  templateUrl: './agendar.page.html',
  styleUrls: ['./agendar.page.scss'],
  standalone: true,
  imports: [
    CommonModule, 
    FormsModule, 
    IonHeader, 
    IonToolbar, 
    IonTitle, 
    IonContent,
    IonList,
    IonItem,
    IonLabel,
    IonNote,
    CurrencyPipe
  ]
})
export class AgendarPage {

  public servicos = [
    { id: 1, nome: 'Corte de Cabelo', descricao: 'Estilo moderno e clássico.', preco: 50.00, duracao: 45 },
    { id: 2, nome: 'Barba Tradicional', descricao: 'Toalha quente e navalha.', preco: 40.00, duracao: 30 },
    { id: 3, nome: 'Combo (Cabelo + Barba)', descricao: 'Pacote completo para o seu visual.', preco: 85.00, duracao: 75 },
    { id: 4, nome: 'Pezinho', descricao: 'Acabamento e contorno.', preco: 15.00, duracao: 15 }
  ];

  // 2. Injete o Router no construtor
  constructor(private router: Router) {}

  selecionarServico(servico: any) {
    console.log('Serviço selecionado:', servico);

    // 3. Navegue para a próxima página, passando dados através do 'state'
    this.router.navigate(['/escolher-barbeiro'], {
      state: {
        servico: servico // Passando o objeto de serviço inteiro
      }
    });
  }
}