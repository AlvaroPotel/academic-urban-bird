import { Component, OnInit } from '@angular/core';
import { OfertasService } from 'app/ofertas.service';
import { Oferta } from 'app/shared/oferta.model';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
    providers: [OfertasService]
})
export class HomeComponent implements OnInit {

    public ofertas: Array<Oferta>

    constructor(private ofertaService: OfertasService) {
    }

    ngOnInit() {
        //this.ofertas = this.ofertaService.getOfertas();
        //console.log(this.ofertas);
        this.ofertaService.getOfertas()
            .then((ofertas: Oferta[]) => {
                this.ofertas = ofertas;
            })
            .catch((param: any) => {
                console.log(param)
            })
    }

    
}
