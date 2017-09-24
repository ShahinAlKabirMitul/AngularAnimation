import { animate, state, style, transition, trigger } from '@angular/animations';

export let slide=trigger('slide',[
    transition(':enter',[
        style({transform:'translateX(-10px)'}),
        animate(500)
    ]),
    transition(':leave',[
        animate('0.5s cubic-bezier(.17,.67,.93,.38)',style({transform:'translateX(-100%)'}))
    ])
])

export let fade= trigger('fade',[
      state('void',style({opacity:0})),
      transition(':enter,:leave',[
       animate(2000)
      ])
     
      
    ])