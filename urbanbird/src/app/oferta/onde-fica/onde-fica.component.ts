import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { OfertasService } from 'app/ofertas.service';

@Component({
  selector: 'app-onde-fica',
  templateUrl: './onde-fica.component.html',
  styleUrls: ['./onde-fica.component.css'],
  providers: [OfertasService]
})
export class OndeFicaComponent implements OnInit {

  public ondefica: string = '';

  constructor(
    private route: ActivatedRoute,
    private ofertasService: OfertasService
  ) { }

  ngOnInit() {

    this.route.parent.params.subscribe((parametros: Params) => {
      this.ofertasService.getOndeFicaOfertaPorId(parametros.id)
        .then((descricao: string) => {
          this.ondefica = descricao;
        })
    })
  }

}
