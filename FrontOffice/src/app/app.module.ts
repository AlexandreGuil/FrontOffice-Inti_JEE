import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarreComponent } from './nav-barre/nav-barre.component';
import { NavigationComponent } from './navigation/navigation.component';
import { AuthentificationComponent } from './authentification/authentification.component';
import { ModifCategorieComponent } from './modif-categorie/modif-categorie.component';
import { PanierFinalComponent } from './panier-final/panier-final.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InscriptionComponent } from './inscription/inscription.component';




@NgModule({
  declarations: [
    AppComponent,
    NavBarreComponent,
    NavigationComponent,
    AuthentificationComponent,
    ModifCategorieComponent,
    PanierFinalComponent,
    InscriptionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
