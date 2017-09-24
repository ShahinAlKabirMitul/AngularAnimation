import { animate, animation, keyframes, state, style, transition, trigger, useAnimation } from '@angular/animations';

export let bounceOutLeftAnimation=animation(
    animate('0.5s cubic-bezier(.17,.67,.93,.38)',keyframes([
        style({
            offset:.2,
            opacity: 1,
            transform: 'translateX(20px)'
        }),
        style({
            offset:1,
            opacity: 0,
            transform: 'translateX(-100%)'
        })
    ]))
)

export let slide=trigger('slide',[
    transition(':enter',[
        style({transform:'translateX(-10px)'}),
        animate(500)
    ]),
    transition(':leave', useAnimation(bounceOutLeftAnimation) )
])

export let fadeInAnimation=animation([
    style({opacity:0}),
    animate(2000)
])

export let fade= trigger('fade',[
    
      transition(':enter',[
        useAnimation(fadeInAnimation)
      ]),
      transition(':leave',[
        animate(2000,style({opacity:0}))
       ])
    ])