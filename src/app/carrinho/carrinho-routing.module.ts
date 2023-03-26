import { NgModule, OnInit } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarrinhoComponent } from './carrinho.component';
import { CarrinhoService } from '../carrinho.service';
import { IProdutoCarrinho } from '../produtos';

const routes: Routes = [{ path: '', component: CarrinhoComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CarrinhoRoutingModule {}
