import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, signal } from '@angular/core';

@Component({
  imports: [
    CommonModule, //Funções lógicas do Angular para manipulação de elementos HTML
  ],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {

    //Inicializar a biblioteca HttpClient do angular
    private http = inject(HttpClient);

    //Função para armazenar os dados dos clientes obtidos
    clientes = signal<any[]>([]);

    //Função executada sempre que o componente é inicializado
    ngOnInit() {
      //Fazendo uma requisição HTTP GET para a URL de consulta de clientes
      this.http.get('http://localhost:8080/api/v1/clientes')
        .subscribe((clientes) => {
          //Imprimindo os clientes obtidos no console do navegador
          this.clientes.set(clientes as any[]);
        });
    }  
  
}
