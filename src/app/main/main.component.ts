import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  buttonText!: string;

  constructor() { }

  ngOnInit(): void {
    this.buttonText = 'Importer moi !';
  }

  onImportExcel(){

  }

}
