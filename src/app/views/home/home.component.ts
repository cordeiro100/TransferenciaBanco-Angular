import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { TransferenciaService } from 'src/app/services/transferencia.service';
import { Transferencia } from 'src/app/transferencia';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  @Output() aoTransferir: EventEmitter<any> = new EventEmitter();

  valor: number;
  destino: number;

  constructor(private service: TransferenciaService, private router: Router) {}

  ngOnInit(): void {}

  transferir() {
    console.log('Solicitada nova transferência');
    const valorEmitir: Transferencia = {
      valor: this.valor,
      destino: this.destino,
    };
    this.service.adicionar(valorEmitir).subscribe(
      (resultado) => {
        console.log(resultado);
        this.limparCampos();
        this.router.navigateByUrl('extrato')
      },
      (error) => console.error(error)
    );
  }

  limparCampos() {
    this.valor = 0;
    this.destino = 0;
  }
}
