import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';

import { CalendarComponentOptions } from '../ion2-calendar';

@Component({
  selector: 'demo-basic',
  template: `
    <hr>
    <h3 style="text-align: center;">basic</h3>
    <ion-calendar [(ngModel)]="date"
                  (onChange)="onChange($event)"
                  [options]="options"
                  type="string"
                  format="YYYY-MM-DD">
    </ion-calendar>
  `,
})
export class DemoBasicComponent {
  date: string = '2018-01-01';
  options: CalendarComponentOptions = {
    from: new Date(2000, 0, 1),
    daysConfig: [
      {
        date: new Date(2018, 0, 2),
        tags: ['ride', 'skate']
      },
      {
        date: new Date(2018, 0, 3),
        tags: ['ride', 'skate', 'park']
      },
      {
        date: new Date(2018, 0, 4),
        tags: ['ride', 'skate', 'park', 'surf']
      }
    ]
  };

  constructor(public modalCtrl: ModalController) {}

  onChange($event) {
    console.log($event);
  }
}
