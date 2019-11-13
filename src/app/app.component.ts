import { Component, OnInit } from '@angular/core';
import { ServloginService } from 'src/services/services/servlogin.service';
import { cliente } from './models/cliente';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit{
  title = 'loginjavier';

  constructor(private servlogin: ServloginService) {

  }


  ngOnInit() {
    var cli = new cliente("ramon","1234");
/*     this.servlogin.login(cli).subscribe(  
    respuesta => console.log('El server nos contesto: ' + respuesta)); */
    this.servlogin.get().subscribe(respuesta => {
    console.log(respuesta);
    });
  }

}
