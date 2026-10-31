// Angular
import { Component, Input } from '@angular/core';
import { MatListModule } from '@angular/material/list';

// Types
import { ListData } from '../../../types/tab-types';

@Component({
  imports: [
    MatListModule,
  ],
  selector: 'app-list-tab',
  styleUrl: './list-tab.less',
  templateUrl: './list-tab.html',
})
export class ListTab {
  @Input() tab!: ListData;
}
