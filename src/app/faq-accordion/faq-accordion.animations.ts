import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';

export const faqAccordionAnimations = {
  slideToggle: trigger('slideToggle', [
    state('void', style({ heigth: 0, opacity: 0 })),
    state('*', style({ heigth: '*', opacity: 1 })),
    transition(':enter', [animate('200ms ease-out')]),
    transition(':leave', [animate('100ms ease-in')]),
  ]),
};
