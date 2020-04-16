import { Router } from '@angular/router';
import { ClientService } from 'src/service/client.service';
import { Categorie } from './../../model/categorie';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-barre',
  templateUrl: './nav-barre.component.html',
  styleUrls: ['./nav-barre.component.css']
})
export class NavBarreComponent implements OnInit {

  listCategorie: Categorie[] = [];

  constructor(private clientService: ClientService, private router: Router) { }

  ngOnInit(): void {
    this.findAllCategorie();
    console.log(this.listCategorie);
  }

  findAllCategorie() {
    this.clientService.findAllCategorie().subscribe((value: Categorie[]) => 
    this.listCategorie = value
    );
  }

}
