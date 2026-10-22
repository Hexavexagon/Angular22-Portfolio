import { Component, inject } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

import { DataService } from '../../services/data-service';

@Component({
  imports: [
    MatCardModule,
  ],
  selector: 'app-referees-tab',
  styleUrl: './referees-tab.less',
  templateUrl: './referees-tab.html',
})
export class RefereesTab {
  private dataService = inject(DataService);
}
