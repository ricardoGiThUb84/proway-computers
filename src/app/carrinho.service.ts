import { Injectable } from '@angular/core';
import { IProduto, IProdutoCarrinho } from './produtos';

@Injectable({
  providedIn: 'root',
})
export class CarrinhoService {
  itens: IProdutoCarrinho[] = [];

  constructor() {}

  obterCarrinho() {
    this.itens = this.getPersistencia('carrinho');
    return this.itens;
  }

  adicionarAoCarrinho(produto: IProdutoCarrinho) {
    this.itens.push(produto);

    this.persistencia('carrinho', JSON.stringify(this.itens));
  }

  removerItemCarrinho(id: number) {
    this.itens = this.itens.filter((item) => item.id !== id);

    this.persistencia('carrinho', JSON.stringify(this.itens));
  }

  limparCarrinho() {
    this.itens = [];

    this.persistencia('carrinho', JSON.stringify([]));
  }

  private persistencia(id: string, valor: any) {
    localStorage.setItem(id, valor);
  }

  private getPersistencia(id: string) {
    return JSON.parse(localStorage.getItem(id) || '[]');
  }
}
