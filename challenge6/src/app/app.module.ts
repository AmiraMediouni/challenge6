import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConvertisseurParentComponent } from './convertisseur-parent/convertisseur-parent.component';
import { ConvertisseurChildComponent } from './convertisseur-child/convertisseur-child.component';
import { ActorsComponentComponent } from './actors-component/actors-component.component';
import { ActorComponentComponent } from './actor-component/actor-component.component';

@NgModule({
  declarations: [
    AppComponent,
    ConvertisseurParentComponent,
    ConvertisseurChildComponent,
    ActorsComponentComponent,
    ActorComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
