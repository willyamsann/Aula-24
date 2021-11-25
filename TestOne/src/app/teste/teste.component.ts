import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teste',
  templateUrl: './teste.component.html',
  styleUrls: ['./teste.component.scss']
})
export class TesteComponent implements OnInit {

    name = "WIllyam Santos"
    count = 0
  constructor() { }

  ngOnInit(): void {
  }

increment(){
    this.count++
}
  
}
