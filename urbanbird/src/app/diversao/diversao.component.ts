import { Component, OnInit } from '@angular/core';
import { OfertasService } from 'app/ofertas.service';
import { Oferta } from 'app/shared/oferta.model';

@Component({
  selector: 'app-diversao',
  templateUrl: './diversao.component.html',
  styleUrls: ['./diversao.component.css'],
  providers:[OfertasService]
})
export class DiversaoComponent implements OnInit {

  public ofertas: Oferta[];

  constructor(private ofertasServices: OfertasService ) { }

  ngOnInit() {
    this.ofertasServices.getOfertasPorCategoria('diversao')
    .then((ofertas: Oferta[]) => {
      this.ofertas = ofertas
    })
  }

}
