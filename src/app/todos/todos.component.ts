import { bounceOutLeftAnimation, fadeInAnimation } from './../../animations';


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
} from '@angular/animations';


import { Component } from '@angular/core';

@Component({
  selector: 'todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
  animations:[
    trigger('todosAnimation',[
      transition(':enter',[
        group([
          query('h1',[
            style({transform:'translateY(-20px)'}),
            animate(1000)
          ]),
          query('@todoAnimation',animateChild())
        ])

       
      ])
    ]),
    trigger('todoAnimation',[
      transition(':enter',[
        useAnimation(fadeInAnimation,{
          params:{
            duration:'1000ms'
            
          }
        })
        
      ]),
      transition(':leave',[
        style({backgroundColor:'red'}),
        animate(1000),
        useAnimation(bounceOutLeftAnimation)
      ])

    ])
  ]
})
export class TodosComponent {
  items: any[] = [
    'Wash the dishes', 
    'Call the accountant', 
    'Apply for a car insurance'];

  addItem(input: HTMLInputElement) {
    this.items.splice(0, 0, input.value);
    input.value = ''; 
  }

  removeItem(item) {
    let index = this.items.indexOf(item);
    this.items.splice(index, 1);
  }
  AnimationStarted($event){
   
    console.log($event);
  }
  AnimationDone($event){
    console.log($event);
  }
}
