import { Component } from '@angular/core';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bytebank';

  destino: number | undefined;
  valor: number | undefined;
  transferencia: any;

  transferir($event: any){
    console.log($event);
    this.transferencia = $event;
  }
}





