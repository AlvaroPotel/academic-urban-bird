import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ordem-compra',
  templateUrl: './ordem-compra.component.html',
  styleUrls: ['./ordem-compra.component.css']
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



  constructor() { }

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
  }

  public atualizaNumero(numero: string): void {
    this.numero = numero;

    this.numeroEstadoPrimitivo = false;
    if (this.numero.length > 0) {
      this.numeroValido = true;
    } else {
      this.numeroValido = false;
    }
  }

  public atualizaComplemento(complemento: string): void {
    this.complemento = complemento;

    this.complementoEstadoPrimitivo = false;
    if (this.complemento.length > 0) {
      this.complementoValido = true;
    } else {
      this.complementoValido = false;
    }
  }

  public atualizaFromaPagamento(fromaPagamento: string): void {
    this.fromaPagamento = fromaPagamento;

    this.fromaPagamentoEstadoPrimitivo = false;
    if (this.fromaPagamento == 'dinehrio' || this.fromaPagamento == 'debito') {
      this.fromaPagamentoValido = true;
    } else {
      this.fromaPagamentoValido = false;
    }
  }

}
