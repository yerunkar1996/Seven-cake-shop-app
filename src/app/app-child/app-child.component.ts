import { Component, Input, Output, EventEmitter } from "@angular/core";

@ Component({
  selector:"app-child",
  templateUrl:"./app-child.component.html",
  styleUrls:["./app-child.component.css"]
})

export class AppChildComponent{
  @ Input()  inputData =""

  @ Output() newEvent = new EventEmitter<string>()


}
