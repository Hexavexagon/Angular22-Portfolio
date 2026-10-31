import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

import { CardData } from '../../../types/tab-types';

@Component({
  imports: [
    MatCardModule,
  ],
  selector: 'app-card-tab',
  styleUrl: './card-tab.less',
  templateUrl: './card-tab.html',
})
export class CardTab {
  @Input() tab!: CardData;
}
