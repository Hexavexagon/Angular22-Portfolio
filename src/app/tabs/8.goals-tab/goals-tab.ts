import { Component, inject } from '@angular/core';

import { DataService } from '../../services/data-service';

@Component({
  imports: [],
  selector: 'app-goals-tab',
  styleUrl: './goals-tab.less',
  templateUrl: './goals-tab.html',
})
export class GoalsTab {
  private dataService = inject(DataService);
}
