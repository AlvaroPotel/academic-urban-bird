import { Component, OnInit } from '@angular/core';
import { Oferta } from 'app/shared/oferta.model';
import { OfertasService } from 'app/ofertas.service';
@Component({
  selector: 'app-restaurantes',
  templateUrl: './restaurantes.component.html',
  styleUrls: ['./restaurantes.component.css'],
  providers:[OfertasService]
})
export class RestaurantesComponent implements OnInit {

  public ofertas: Oferta[];

  constructor(private ofertasServices: OfertasService) { }

  ngOnInit() {
    this.ofertasServices.getOfertasPorCategoria('restaurante')
    .then((ofertas:Oferta[]) => {
      this.ofertas = ofertas
    })
  }

  //getOfertasPorCategoria

}
