import { Component, inject } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

import { DataService } from '../../services/data-service';

@Component({
  imports: [
    MatCardModule,
  ],
  selector: 'app-work-history-tab',
  styleUrl: './work-history-tab.less',
  templateUrl: './work-history-tab.html',
})
export class WorkHistoryTab {
  private dataService = inject(DataService);
}

