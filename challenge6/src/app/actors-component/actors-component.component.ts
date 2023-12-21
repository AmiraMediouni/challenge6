import { Component } from '@angular/core';
import { ActorComponentComponent } from '../actor-component/actor-component.component';
import { Actor } from '../actor';

@Component({
  selector: 'app-actors-component',
  templateUrl: './actors-component.component.html',
  styleUrls: ['./actors-component.component.css']
})
export class ActorsComponentComponent {
  listActors:Actor[]=[
     new Actor ('Robert','Julia'),

     new Actor ('Walker','Paul'),

     new Actor ('Pitt','Brad')
    ]

}
