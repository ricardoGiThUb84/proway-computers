import { Component } from '@angular/core';
import { CarrinhoService } from '../carrinho.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  constructor(
    public carrinhoService: CarrinhoService,
    private router: Router
  ) {}

  mostrarPaginaCarrinho() {
    this.router.navigate(['carrinho']);
  }

  mostrarPaginaContato() {
    this.router.navigate(['contato']);
  }
}
