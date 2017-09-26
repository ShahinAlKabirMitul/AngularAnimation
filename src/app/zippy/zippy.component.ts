import { Component, Input } from '@angular/core';
import {
  animate,
  animateChild,
  keyframes,
  query,
  state,
  style,
  transition,
  trigger,
  useAnimation,
  group,
  stagger,
} from '@angular/animations';

@Component({
  selector: 'zippy',
  templateUrl: './zippy.component.html',
  styleUrls: ['./zippy.component.css'],
  animations:[
    trigger('expendCollapse',[
      state('collapsed',style({
        height:0,
        overflow:'hidden',
      
        paddingTop:0,
        paddingBottom:0
       
      })),
     
      transition('collapsed=> expended',[
          animate('300ms ease-out')
      ]),
      transition('expended=> collapsed',[
        animate('300ms ease-in')
    ])
    ])
  ]
})
export class ZippyComponent  {
  @Input('title') title: string;
  isExpanded: boolean;

  toggle() { 
    this.isExpanded = !this.isExpanded;
  }
}
