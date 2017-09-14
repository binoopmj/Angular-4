import { Component } from '@angular/core';
import { DataService } from './data.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name =' ';
  details = {
    branch : 'tvm',
    number : '0470'
  };
  branches = ['tvm','qln','ekm'];
  buttonStatus = 'disabled' ;
  clickEvent(event){
    console.log(event);
  }
  buttonClasses = {
      'red-button' : false,
      'large-button' : true
  };

  constructor(private dataService:DataService) {

  }
  someProperty:string = '';
  ngOnInit() {
    console.log(this.dataService.branches);
    this.someProperty = this.dataService.myData();
  }
  items = ["Angula 4", "React", "Html"];
  newItem = "";
  pushItem = function() {
    if (this.newitem != ""){
      this.items.push(this.newItem);
      this.newItem = "";
    }
  }
  removeItem = function(index) {
    this.items.splice(index, 1);
  }
  day = new Date();
  arr = [3,2,5,7,4,1,8];
}
