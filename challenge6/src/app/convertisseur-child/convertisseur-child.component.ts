import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-convertisseur-child',
  templateUrl: './convertisseur-child.component.html',
  styleUrls: ['./convertisseur-child.component.css']
})
export class ConvertisseurChildComponent implements OnChanges{
  
  private _valeurModifiée=""
  message:string=""
  get valeurModifiée(){
    return this._valeurModifiée
  }
  @Input()
  set valeurModifiée(value:string){
    this._valeurModifiée=value
    console.log(this.valeurModifiée)
      }
  @Input() public parentData2:string=""
 
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
      
}
}
