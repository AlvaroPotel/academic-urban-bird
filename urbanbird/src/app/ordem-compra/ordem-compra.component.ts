import { Component, OnInit } from '@angular/core';
import { OrdemCompraService } from 'app/ordem-compra.service';
import { Pedido } from 'app/shared/pedido.model';

@Component({
  selector: 'app-ordem-compra',
  templateUrl: './ordem-compra.component.html',
  styleUrls: ['./ordem-compra.component.css'],
  providers: [OrdemCompraService]
})
export class OrdemCompraComponent implements OnInit {

  public endereco: string = '';
  public numero: string = '';
  public complemento: string = '';
  public fromaPagamento: string = '';

  public enderecoValido: boolean;
  public numeroValido: boolean;
  public complementoValido: boolean;
  public fromaPagamentoValido: boolean;

  public enderecoEstadoPrimitivo: boolean = true;
  public numeroEstadoPrimitivo: boolean = true;
  public complementoEstadoPrimitivo: boolean = true;
  public fromaPagamentoEstadoPrimitivo: boolean = true;

  public formEstado: string = 'disabled';

  public pedido: Pedido = new Pedido('', '', '', '');

  public idPedidoCompra: number

  constructor(private ordemCompraService: OrdemCompraService) { }

  ngOnInit() {
  }

  public atualizaEndereco(endereco: string): void {
    this.endereco = endereco;

    this.enderecoEstadoPrimitivo = false;

    if (this.endereco.length > 3) {
      this.enderecoValido = true;
    } else {
      this.enderecoValido = false;
    }
    this.habilitaForm();
  }

  public atualizaNumero(numero: string): void {
    this.numero = numero;

    this.numeroEstadoPrimitivo = false;
    if (this.numero.length > 0) {
      this.numeroValido = true;
    } else {
      this.numeroValido = false;
    }
    this.habilitaForm();
  }

  public atualizaComplemento(complemento: string): void {
    this.complemento = complemento;

    this.complementoEstadoPrimitivo = false;
    if (this.complemento.length > 0) {
      this.complementoValido = true;
    } else {
      this.complementoValido = false;
    }
    this.habilitaForm();
  }

  public atualizaFromaPagamento(fromaPagamento: string): void {
    this.fromaPagamento = fromaPagamento;

    this.fromaPagamentoEstadoPrimitivo = false;
    if (this.fromaPagamento == 'dinehrio' || this.fromaPagamento == 'debito') {
      this.fromaPagamentoValido = true;
    } else {
      this.fromaPagamentoValido = false;
    }
    this.habilitaForm();
  }

  public habilitaForm(): void {
    if (this.enderecoValido === true && this.numeroValido === true && this.fromaPagamentoValido === true) {
      this.formEstado = '';
    } else {
      this.formEstado = 'disabled';
    }
  }

  public confirmarCompra(): void {
    this.pedido.endereco = this.endereco;
    this.pedido.numero = this.numero;
    this.pedido.complemento = this.complemento;
    this.pedido.fromaPagamento = this.fromaPagamento;
    this.ordemCompraService.efetivarCompra(this.pedido)
      .subscribe((idPedido: number) => {
        this.idPedidoCompra = idPedido

      })
  }

}
