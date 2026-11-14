// Angular
import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';

// Types
import { CardData } from '../../../types/tab-types';

@Component({
  imports: [
    MatCardModule,
    MatChipsModule,
  ],
  selector: 'app-card-tab',
  styleUrl: './card-tab.less',
  templateUrl: './card-tab.html',
})
export class CardTab {
  @Input() tab!: CardData;
}
