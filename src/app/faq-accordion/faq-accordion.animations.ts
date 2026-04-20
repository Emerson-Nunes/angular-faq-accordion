import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';

export const faqAccordionAnimations = {
  slideToggle: trigger('slideToggle', [
    state('void', style({ height: 0, opacity: 0 })),
    state('*', style({ height: '*', opacity: 1 })),
    transition(':enter', [animate('500ms ease-out')]),
    transition(':leave', [animate('500ms ease-in')]),
  ]),
};
