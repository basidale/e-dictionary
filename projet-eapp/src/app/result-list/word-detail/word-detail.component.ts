import {AfterViewInit, Component, Input, OnInit} from '@angular/core';
import {MatSlider} from "@angular/material/slider";

@Component({
  selector: 'app-word-detail',
  templateUrl: './word-detail.component.html',
  styleUrls: ['./word-detail.component.css']
})
export class WordDetailComponent implements OnInit {


  @Input() title: string;
  @Input() terms: Array<any>;

  public domainTermsWeight;

  constructor() {
  }

  ngOnInit(): void {
    this.domainTermsWeight = 0;
  }


  formatLabel(value: number) {
    return `${Math.floor((value * 100)  / (this as unknown)['max'])}%`;
  }


  get getTermMaxWeight() {
    
    const res = this.terms.reduce((acc, newValue) => {
      if (newValue > acc) {
        acc = newValue;
      }
    }, 0);

    return res;
  }
  getTermColor(term){
    if( term.weight >= 80 ){
      return 'first';
    } else{ 
        if( term.weight >= 60 && term.weight <= 80 ){
         return 'second';
      } else{
          if( term.weight >= 40 && term.weight < 60 ){
            return 'third';
          } else return 'fourth';
      } 
    } 
  }
}
