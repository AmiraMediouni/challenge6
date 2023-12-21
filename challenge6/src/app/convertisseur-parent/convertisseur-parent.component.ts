import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-convertisseur-parent',
  templateUrl: './convertisseur-parent.component.html',
  styleUrls: ['./convertisseur-parent.component.css']
})
export class ConvertisseurParentComponent {
  @Input() public parentData:string=""
  public val_initiale:string="yassine"
  public message=""

}
