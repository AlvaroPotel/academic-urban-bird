import { Component, OnInit } from '@angular/core';
import { OfertasService } from 'app/ofertas.service';
import { Oferta } from 'app/shared/oferta.model';
import { Observable, Subject } from 'rxjs';
import 'rxjs/Rx';

@Component({
  selector: 'app-topo',
  templateUrl: './topo.component.html',
  styleUrls: ['./topo.component.css'],
  providers: [OfertasService]
})
export class TopoComponent implements OnInit {

  public ofertas: Observable<Oferta[]>
  private subjectPesquisa: Subject<string> = new Subject<string>()

  constructor(private ofertaServices: OfertasService) { }

  ngOnInit() {
    this.ofertas = this.subjectPesquisa
      .debounceTime(1000)
      .distinctUntilChanged()
      .switchMap((termo: string) => {
        if (termo.trim() === '') {
          return Observable.of<Oferta[]>([])
        }
        return this.ofertaServices.pesquisaOfertas(termo)
      })
      .catch((err: any) => {
        return Observable.of<Oferta[]>([])
      })
  }

  public pesquisa(termoDaPesquisa: string): void {
    this.subjectPesquisa.next(termoDaPesquisa)
  }

  public limpaPesquisa(): void {
    this.subjectPesquisa.next('')
  }
}
