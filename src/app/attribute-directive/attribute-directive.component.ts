import { Component } from '@angular/core';

@Component({
  selector: 'app-attribute-directive',
  templateUrl: './attribute-directive.component.html',
  styleUrls: ['./attribute-directive.component.scss']
})
export class AttributeDirectiveComponent {
  isHightlighted:boolean=true;
  classOneActive :boolean=true;
  classTwoActive:boolean=true;

  title!:string;
  details!:string;
  imgUrl!:string;
  postUrl!:string;
  boolAddBackground!:boolean;
  oneWay:string="this is one way binding";
}
