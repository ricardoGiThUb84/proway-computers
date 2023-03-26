import { Component, OnInit } from '@angular/core';
import { IProdutoCarrinho } from '../produtos';
import { CarrinhoService } from '../carrinho.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NotificacaoService } from '../notificacao.service';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css'],
})
export class CarrinhoComponent implements OnInit {
  itens: IProdutoCarrinho[] = [];

  total: number = 0;

  constructor(
    public carrinhoService: CarrinhoService,
    private router: Router,
    private notificacaoService: NotificacaoService
  ) {}
  ngOnInit(): void {
    this.itens = this.carrinhoService.obterCarrinho();
    this.valorTotal();
  }

  removerItem(id: number) {
    this.itens = this.itens.filter((item) => item.id !== id);

    this.carrinhoService.removerItemCarrinho(id);
    this.valorTotal();
  }

  valorTotal() {
    this.total = this.itens.reduce(
      (acc, item) => acc + item.preco * item.quantidade,
      0
    );
  }

  comprar() {
    this.notificacaoService.notificar('Compra finalizada com sucesso!');

    this.carrinhoService.limparCarrinho();

    this.router.navigate(['produtos']);
  }
}
