import { Component } from '@angular/core';
import { AddTwoService } from '../services/add-two.service';

@Component({
  selector: 'app-serviceuser',
  templateUrl: './serviceuser.component.html',
  styleUrls: ['./serviceuser.component.scss']
})
export class ServiceuserComponent {

  userVariable!: string;
  
  constructor(private addTwo : AddTwoService){
    this.userVariable= addTwo.myName;
  }


  
}
