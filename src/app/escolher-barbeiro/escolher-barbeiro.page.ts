import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { 
  IonHeader, 
  IonToolbar, 
  IonTitle, 
  IonContent,
  IonList,
  IonItem,
  IonLabel,
  IonAvatar,
  IonBackButton,
  IonButtons
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-escolher-barbeiro',
  templateUrl: './escolher-barbeiro.page.html',
  styleUrls: ['./escolher-barbeiro.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonLabel, IonAvatar, IonBackButton, IonButtons]
})
export class EscolherBarbeiroPage {

  public servicoSelecionado: any;
  public barbeiros = [
    { id: 1, nome: 'João Silva', especialidade: 'Cortes Modernos' },
    { id: 2, nome: 'Carlos Souza', especialidade: 'Barba e Estilo Clássico' },
    { id: 3, nome: 'Pedro Lima', especialidade: 'Todos os estilos' }
  ];

  constructor(private router: Router) {
    // Lógica para receber os dados da página anterior
    const navigation = this.router.getCurrentNavigation();
    this.servicoSelecionado = navigation?.extras?.state?.['servico'];

    if (this.servicoSelecionado) {
      console.log('Serviço recebido na página de barbeiros:', this.servicoSelecionado);
    }
  }

  // Função para ser chamada ao clicar em um barbeiro
  selecionarBarbeiro(barbeiro: any) {
    console.log('Barbeiro selecionado:', barbeiro);

    // Navega para a próxima página, levando o serviço e o barbeiro
    this.router.navigate(['/escolher-data-hora'], {
      state: {
        servico: this.servicoSelecionado,
        barbeiro: barbeiro
      }
    });
  }
}