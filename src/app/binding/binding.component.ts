import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent implements OnInit {

  public classesToApply = "class-fail class-special" ;
  public isSpecial = true;
  public isImportant = false;

  public specialClasses= {
    isSpecial: this.isSpecial,
    animated: true,
    bounce: true,
    infinite: false
  }

  public specialStyles = {
    'color': 'grey',
    'text-shadow': '1px 1px black',
    'background-color':'#CBFFFE'
  } 

  constructor() { }

  ngOnInit() {
  }

}
